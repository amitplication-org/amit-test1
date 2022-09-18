import { PostCreateNestedManyWithoutUsersInput } from "./PostCreateNestedManyWithoutUsersInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  posts?: PostCreateNestedManyWithoutUsersInput;
  profile?: ProfileWhereUniqueInput | null;
  roles: InputJsonValue;
  username: string;
};
