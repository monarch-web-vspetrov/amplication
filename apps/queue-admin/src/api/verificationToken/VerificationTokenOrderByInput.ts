import { SortOrder } from "../../util/SortOrder";

export type VerificationTokenOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  identifier?: SortOrder;
  token?: SortOrder;
  expires?: SortOrder;
  userId?: SortOrder;
};
