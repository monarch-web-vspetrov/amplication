import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  carNumber?: SortOrder;
  brand?: SortOrder;
  carType?: SortOrder;
};
