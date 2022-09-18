import { JsonValue } from "type-fest";

export type Setting = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  updatedAt: Date;
};
