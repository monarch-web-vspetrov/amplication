import { SortOrder } from "../../util/SortOrder";

export type QueueHistoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  queueId?: SortOrder;
  oldStatusId?: SortOrder;
  newStatusId?: SortOrder;
  changedAt?: SortOrder;
  queueId?: SortOrder;
  queueStatusId?: SortOrder;
};
