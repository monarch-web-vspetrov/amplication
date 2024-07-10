import { SortOrder } from "../../util/SortOrder";

export type CarTypeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  typeField?: SortOrder;
};
