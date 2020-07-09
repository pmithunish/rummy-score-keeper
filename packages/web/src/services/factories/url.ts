export declare namespace URL {
  export interface IURL {
    readonly hostname?: string;
    readonly port?: number | string;
    readonly protocol?: "http" | "https";
    readonly route?: string;
    readonly version?: string;
    readonly baseUrl: string;
    create(params: URL.Create.Props): string;
  }

  export type Options = Omit<URL.IURL, "baseUrl" | "create">;

  export namespace Create {
    export interface Props {
      named?: string[];
      query?: { key: string; value: string }[];
    }
  }
}

// eslint-disable-next-line no-redeclare
export class URL implements URL.IURL {
  readonly baseUrl: string;
  readonly hostname?: string;
  readonly port?: number | string;
  readonly protocol?: "http" | "https";
  readonly route?: string;
  readonly version?: string;

  constructor({ hostname, port, protocol, route, version }: URL.Options) {
    if (port && isNaN(parseInt("" + port, 10))) {
      throw new Error("Invalid port number");
    }
    this.hostname = hostname;
    this.port = port;
    this.protocol = protocol;
    this.route = route;
    this.version = version;
    this.baseUrl = "";
    if (this.protocol) {
      this.baseUrl = `${this.protocol}://`;
    }
    if (this.hostname) {
      this.baseUrl = `${this.baseUrl}${this.hostname}`;
    }
    if (this.port) {
      this.baseUrl = `${this.baseUrl}:${this.port}`;
    }
  }

  public create({ named = [], query = [] }: URL.Create.Props): string {
    const namedParams = named.reduce((url: string, param) => {
      return `${url}/${param}`;
    }, "");

    const queryParams = query.reduce((url: string, param, index) => {
      if (index === 0) {
        return `?${url}${param.key}=${param.value}`;
      }

      return `${url}&${param.key}=${param.value}`;
    }, "");

    let url = this.baseUrl;
    if (this.version) {
      url = `${url}/${this.version}`;
    }
    if (this.route) {
      url = `${url}/${this.route}`;
    }
    if (namedParams) {
      url = `${url}${namedParams}`;
    }
    if (queryParams) {
      url = `${url}${queryParams}`;
    }

    return url;
  }
}
