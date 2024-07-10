import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sessionToken?: SortOrder;
  userId?: SortOrder;
  expires?: SortOrder;
  userId?: SortOrder;
};
