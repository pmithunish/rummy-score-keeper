import * as Http from "http";

export declare namespace Request {
  export interface Options {
    url: string;
    headers?: Http.OutgoingHttpHeaders;
    body?: any;
  }
}
