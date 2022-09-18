import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type SettingWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
};
