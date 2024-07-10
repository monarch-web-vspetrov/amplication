import { SortOrder } from "../../util/SortOrder";

export type QueueOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  position?: SortOrder;
  box?: SortOrder;
  userId?: SortOrder;
  userPhone?: SortOrder;
  carId?: SortOrder;
  carType?: SortOrder;
  joinInQueue?: SortOrder;
  statusId?: SortOrder;
  finished?: SortOrder;
  carLeave?: SortOrder;
  serviceId?: SortOrder;
  userId?: SortOrder;
  carId?: SortOrder;
  queueStatusId?: SortOrder;
  serviceId?: SortOrder;
};
