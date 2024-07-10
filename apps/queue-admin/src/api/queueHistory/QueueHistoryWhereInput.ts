import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { QueueStatusWhereUniqueInput } from "../queueStatus/QueueStatusWhereUniqueInput";

export type QueueHistoryWhereInput = {
  id?: StringFilter;
  queueId?: IntNullableFilter;
  oldStatusId?: IntNullableFilter;
  newStatusId?: IntNullableFilter;
  changedAt?: DateTimeNullableFilter;
  queue?: QueueWhereUniqueInput;
  queueStatus?: QueueStatusWhereUniqueInput;
};
