import * as Http from "http";
import * as Mocks from "src/mocks";
import * as Services from "src/services";

export declare namespace Server {
  export interface IServer {
    handle(props: Server.Handle.Props): Promise<Server.Handle.Return>;
  }

  export interface Options {
    urlFactory: Services.Factories.URL;
    routes: Mocks.API.Route.IHandler<Server.Handle.Return>[];
  }

  export namespace Handle {
    export interface Props {
      url: string;
      headers?: Http.OutgoingHttpHeaders;
      body?: any;
    }
    export type Return = Mocks.API.Routes.User.User.Handle.Return | Error;
  }
}

// eslint-disable-next-line no-redeclare
export class Server implements Server.IServer {
  private urlFactory: Services.Factories.URL;
  private routes: Mocks.API.Route.IHandler<Server.Handle.Return>[];
  constructor({ urlFactory, routes }: Server.Options) {
    this.urlFactory = urlFactory;
    this.routes = routes;
  }

  public async handle({
    url,
    ...restOfRequest
  }: Server.Handle.Props): Promise<Server.Handle.Return> {
    if (!url.includes(this.urlFactory.baseUrl)) {
      throw new Error("404: Endpoint not found");
    }

    const responses = await Promise.all(
      this.routes.map((route) => route.handle({ url, ...restOfRequest }))
    );

    const [response] = responses.filter((response) => response);

    if (!response) {
      throw new Error("404: Endpoint not found");
    }

    return response;
  }
}
