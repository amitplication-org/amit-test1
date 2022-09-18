import { Profile as TProfile } from "../api/profile/Profile";

export const PROFILE_TITLE_FIELD = "bio";

export const ProfileTitle = (record: TProfile): string => {
  return record.bio || record.id;
};
