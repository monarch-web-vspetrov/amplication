import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { QueueListRelationFilter } from "../queue/QueueListRelationFilter";

export type ServiceWhereInput = {
  id?: StringFilter;
  serviceName?: StringNullableFilter;
  price?: FloatNullableFilter;
  estimatedTime?: IntNullableFilter;
  queues?: QueueListRelationFilter;
};
