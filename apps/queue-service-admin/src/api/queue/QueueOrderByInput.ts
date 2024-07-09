import { SortOrder } from "../../util/SortOrder";

export type QueueOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  carId?: SortOrder;
  serviceId?: SortOrder;
  userId?: SortOrder;
};
