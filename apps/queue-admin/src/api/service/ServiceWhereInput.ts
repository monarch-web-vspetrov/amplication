import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { QueueListRelationFilter } from "../queue/QueueListRelationFilter";

export type ServiceWhereInput = {
  id?: StringFilter;
  serviceName?: StringNullableFilter;
  cost?: IntNullableFilter;
  timeSpend?: IntNullableFilter;
  queues?: QueueListRelationFilter;
};
