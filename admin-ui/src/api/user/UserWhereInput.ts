import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  posts?: PostListRelationFilter;
  profile?: ProfileWhereUniqueInput;
  username?: StringFilter;
};
