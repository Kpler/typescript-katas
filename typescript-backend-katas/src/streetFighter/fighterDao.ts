import { Fighter } from "./ranking";
import {parseJsonFile} from "./helpers/helpers";

export const getFighters = (filename: string): Fighter[] => {
  return parseJsonFile<Fighter>(filename)
}
