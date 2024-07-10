import { SortOrder } from "../../util/SortOrder";

export type BoxOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  boxNumber?: SortOrder;
};
