import * as Mocks from "src/mocks";
import * as Models from "src/models";
import * as Utils from "src/utils";
import * as Services from "src/services";
import * as CONSTANTS from "./constants";
import * as Configs from "src/configs";

export declare namespace User {
  export interface IUser extends Mocks.API.Route.IHandler<User.Handle.Return> {
    readonly mockUser: (props?: Mocks.Data.UserProps) => Mocks.Data.UserReturn;
    readonly urlFactory: Services.Factories.URL;
  }

  export type Options = Omit<User.IUser, "handle">;

  export namespace Handle {
    export type Props = Mocks.API.Server.Handle.Props;
    export type Return = User.ReadOne.Return | undefined;
  }

  export namespace ReadOne {
    export type Props = Mocks.API.Server.Handle.Props;
    export type Return = Models.User | undefined;
  }
}

// eslint-disable-next-line no-redeclare
export class User implements User.IUser {
  public readonly mockUser: (
    props?: Mocks.Data.UserProps
  ) => Mocks.Data.UserReturn;
  public readonly urlFactory: Services.Factories.URL;

  constructor({ mockUser, urlFactory }: User.Options) {
    this.mockUser = mockUser;
    this.urlFactory = urlFactory;
  }

  public async handle({
    url,
    ...restOfRequest
  }: User.Handle.Props): Promise<User.Handle.Return> {
    if (!url.includes(this.urlFactory.route as string)) {
      return;
    }

    const responses = await Promise.all([
      this.readOne({ url, ...restOfRequest }),
    ]);

    const [response] = responses.filter((response) => response);

    return response;
  }

  @Utils.Decorators.Latency()
  private async readOne({
    body,
    url,
  }: User.ReadOne.Props): Promise<User.ReadOne.Return> {
    const functionUrl = this.urlFactory.create({
      named: Configs.API.ROUTES.USER.READ.ONE.LOGIN.NAMED,
    });

    if (!url.includes(functionUrl)) {
      return undefined;
    }

    const { username, password } = body;

    if (
      username !== CONSTANTS.USER.LOGIN.USERNAME ||
      password !== CONSTANTS.USER.LOGIN.PASSWORD
    ) {
      throw new Error("Access Forbidden");
    }

    return this.mockUser({ username });
  }
}
