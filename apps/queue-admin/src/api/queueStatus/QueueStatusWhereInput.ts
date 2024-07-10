import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { QueueListRelationFilter } from "../queue/QueueListRelationFilter";
import { QueueHistoryListRelationFilter } from "../queueHistory/QueueHistoryListRelationFilter";

export type QueueStatusWhereInput = {
  id?: StringFilter;
  statusName?: StringNullableFilter;
  queues?: QueueListRelationFilter;
  queueHistories?: QueueHistoryListRelationFilter;
};
