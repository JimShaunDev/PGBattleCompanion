import { Type } from "./Types";

export interface Pokemon {
  id: Number;
  name: String;
  types?: Type[];
  attack?: Type;
  special?: Type;
  sprite?: String;
}
