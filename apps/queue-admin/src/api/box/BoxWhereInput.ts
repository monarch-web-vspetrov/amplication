import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type BoxWhereInput = {
  id?: StringFilter;
  boxNumber?: IntNullableFilter;
};
