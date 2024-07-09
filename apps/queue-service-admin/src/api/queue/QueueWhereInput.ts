import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QueueWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  car?: CarWhereUniqueInput;
  service?: ServiceWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
