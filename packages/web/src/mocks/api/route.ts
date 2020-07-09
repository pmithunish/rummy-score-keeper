import * as Mocks from "src/mocks";

export interface IHandler<T> {
  // readonly route: string;
  handle(props: Mocks.API.Server.Handle.Props): Promise<T>;
}
