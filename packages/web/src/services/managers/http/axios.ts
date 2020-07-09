import * as Services from "src/services";
import * as AxiosTypes from "axios";

export declare namespace Axios {
  export interface IAxios {
    readonly agent: AxiosTypes.AxiosInstance;
  }

  export type Options = Axios.IAxios;
}

// eslint-disable-next-line no-redeclare
export class Axios implements Services.Managers.HTTP.IHTTP, Axios.IAxios {
  readonly agent: AxiosTypes.AxiosInstance;
  constructor({ agent }: Axios.Options) {
    this.agent = agent;
  }

  public async post<T, B>({
    body,
    url,
    headers,
  }: Services.Managers.HTTP.Request.Props<B, true>): Promise<T> {
    const response = await this.agent.post<T>(url, body || undefined, {
      headers: headers?.getHeaders(),
    });

    return response.data;
  }
}
