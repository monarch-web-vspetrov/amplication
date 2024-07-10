import { SortOrder } from "../../util/SortOrder";

export type QueueStatusOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  statusName?: SortOrder;
};
