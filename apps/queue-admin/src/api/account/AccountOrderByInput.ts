import { SortOrder } from "../../util/SortOrder";

export type AccountOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  refreshToken?: SortOrder;
  accessToken?: SortOrder;
  expiresAt?: SortOrder;
  tokenType?: SortOrder;
  scope?: SortOrder;
  idToken?: SortOrder;
  sessionState?: SortOrder;
  refreshTokenExpiresIn?: SortOrder;
  userId?: SortOrder;
  typeField?: SortOrder;
  provider?: SortOrder;
  providerAccountId?: SortOrder;
  userId?: SortOrder;
};
