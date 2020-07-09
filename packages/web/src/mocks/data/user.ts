import * as Configs from "src/configs";
import * as Models from "src/models";
import * as Faker from "faker";
import { v4 as uuidv4 } from "uuid";

export type UserProps = Partial<Models.User>;
export type UserReturn = Models.User;

export function User(props?: UserProps): UserReturn {
  const { id, role, username, profilePictureURL } = props || {};

  return {
    id: id || uuidv4(),
    role: role || Faker.random.arrayElement(Configs.ROLES),
    username: username || Faker.name.firstName(),
    profilePictureURL: profilePictureURL || Faker.internet.avatar(),
  };
}
