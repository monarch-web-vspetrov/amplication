import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CarBrandWhereUniqueInput } from "../carBrand/CarBrandWhereUniqueInput";
import { CarTypeWhereUniqueInput } from "../carType/CarTypeWhereUniqueInput";
import { QueueListRelationFilter } from "../queue/QueueListRelationFilter";

export type CarWhereInput = {
  id?: StringFilter;
  userId?: StringNullableFilter;
  brandId?: IntNullableFilter;
  carTypeId?: IntNullableFilter;
  model?: StringNullableFilter;
  carNumber?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  carBrand?: CarBrandWhereUniqueInput;
  carType?: CarTypeWhereUniqueInput;
  queues?: QueueListRelationFilter;
};
