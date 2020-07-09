import * as Models from "src/models";
import * as Services from "src/services";
import * as Configs from "src/configs";

export declare namespace User {
  export interface IUser {
    urlFactory: Services.Factories.URL;
    httpManager: Services.Managers.HTTP.IHTTP;
  }

  export type Options = User.IUser;

  export namespace ReadOne {
    export interface Props {
      body: User.ReadOne.Body;
    }

    export interface Body {
      username: string;
      password: string;
    }

    export type Return = Models.User;
  }
}

// eslint-disable-next-line no-redeclare
export class User
  implements
    Services.Actions.IReadOne<User.ReadOne.Props, User.ReadOne.Return> {
  private urlFactory: Services.Factories.URL;
  private httpManager: Services.Managers.HTTP.IHTTP;
  constructor({ urlFactory, httpManager }: User.Options) {
    this.urlFactory = urlFactory;
    this.httpManager = httpManager;
  }

  public async readOne({
    body,
  }: User.ReadOne.Props): Promise<User.ReadOne.Return> {
    const url = this.urlFactory.create({
      named: Configs.API.ROUTES.USER.READ.ONE.LOGIN.NAMED,
    });
    console.log({ url });
    const response = await this.httpManager.post<
      User.ReadOne.Return,
      User.ReadOne.Body
    >({
      body,
      url,
    });

    return response;
  }
}
