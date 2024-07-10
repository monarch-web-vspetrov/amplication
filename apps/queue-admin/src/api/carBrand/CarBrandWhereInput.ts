import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CarListRelationFilter } from "../car/CarListRelationFilter";

export type CarBrandWhereInput = {
  id?: StringFilter;
  brandName?: StringNullableFilter;
  cars?: CarListRelationFilter;
};
