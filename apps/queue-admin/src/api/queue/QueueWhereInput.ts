import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { QueueStatusWhereUniqueInput } from "../queueStatus/QueueStatusWhereUniqueInput";
import { QueueHistoryListRelationFilter } from "../queueHistory/QueueHistoryListRelationFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type QueueWhereInput = {
  id?: StringFilter;
  position?: IntNullableFilter;
  box?: IntNullableFilter;
  userId?: StringNullableFilter;
  userPhone?: StringNullableFilter;
  carId?: IntNullableFilter;
  carType?: IntNullableFilter;
  joinInQueue?: DateTimeNullableFilter;
  statusId?: IntNullableFilter;
  finished?: DateTimeNullableFilter;
  carLeave?: BooleanNullableFilter;
  serviceId?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  car?: CarWhereUniqueInput;
  queueStatus?: QueueStatusWhereUniqueInput;
  queueHistories?: QueueHistoryListRelationFilter;
  service?: ServiceWhereUniqueInput;
};
