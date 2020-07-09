import * as Http from "http";

export declare namespace HTTP {
  export type IHTTP = IPost;

  export interface IDelete {
    /**
     * @name R Return type
     * @name B Body type
     */
    delete<R, B>(props: HTTP.Request.Props<B, false>): Promise<R>;
  }

  export interface IGet {
    /**
     * @name R Return type
     */
    get<R>(props: HTTP.Request.Props<undefined, false>): Promise<R>;
  }

  export interface IPost {
    /**
     * @name R Return type
     * @name B Body type
     */
    post<R, B>(props: HTTP.Request.Props<B, true>): Promise<R>;
  }

  export interface IPut {
    /**
     * @name R Return type
     * @name B Body type
     */
    put<R, B>(props: HTTP.Request.Props<B, true>): Promise<R>;
  }

  export namespace Request {
    /**
     * @name B Body type
     * @name BA Body available
     */
    export type Props<B, BA extends boolean> = BA extends true
      ? { body: B; headers?: Http.OutgoingMessage; url: string }
      : {
          headers?: Http.OutgoingMessage;
          url: string;
        };
  }
}
