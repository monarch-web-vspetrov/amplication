import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { QueueListRelationFilter } from "../queue/QueueListRelationFilter";

export type CarWhereInput = {
  id?: StringFilter;
  carNumber?: StringNullableFilter;
  brand?: StringNullableFilter;
  carType?: StringNullableFilter;
  queues?: QueueListRelationFilter;
};
