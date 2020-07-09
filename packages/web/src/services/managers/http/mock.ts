import * as Services from "src/services";
import * as Mocks from "src/mocks";

export declare namespace Mock {
  export interface IMock {
    readonly server: Mocks.API.Server.IServer;
  }

  export type Options = Mock.IMock;
}

// eslint-disable-next-line no-redeclare
export class Mock implements Services.Managers.HTTP.IHTTP, Mock.IMock {
  public readonly server: Mocks.API.Server.IServer;
  constructor({ server }: Mock.Options) {
    this.server = server;
  }

  public async post<T, B>({
    body,
    headers,
    url,
  }: Services.Managers.HTTP.Request.Props<B, true>): Promise<T> {
    const response = this.server.handle({
      body,
      headers: headers?.getHeaders(),
      url,
    });

    return (response as unknown) as T;
  }
}
