import { PostUpdateManyWithoutUsersInput } from "./PostUpdateManyWithoutUsersInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  posts?: PostUpdateManyWithoutUsersInput;
  profile?: ProfileWhereUniqueInput | null;
  roles?: InputJsonValue;
  username?: string;
};
