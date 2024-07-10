import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CarListRelationFilter } from "../car/CarListRelationFilter";

export type CarTypeWhereInput = {
  id?: StringFilter;
  typeField?: StringNullableFilter;
  cars?: CarListRelationFilter;
};
