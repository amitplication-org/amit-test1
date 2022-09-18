import { Post } from "../post/Post";
import { Profile } from "../profile/Profile";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  posts?: Array<Post>;
  profile?: Profile | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
