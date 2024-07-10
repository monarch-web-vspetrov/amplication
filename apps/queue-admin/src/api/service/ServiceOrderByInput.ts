import { SortOrder } from "../../util/SortOrder";

export type ServiceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  serviceName?: SortOrder;
  cost?: SortOrder;
  timeSpend?: SortOrder;
};
