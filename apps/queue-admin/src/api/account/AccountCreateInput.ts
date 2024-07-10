import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountCreateInput = {
  refreshToken?: string | null;
  accessToken?: string | null;
  expiresAt?: number | null;
  tokenType?: string | null;
  scope?: string | null;
  idToken?: string | null;
  sessionState?: string | null;
  refreshTokenExpiresIn?: number | null;
  userId?: string | null;
  typeField?: string | null;
  provider?: string | null;
  providerAccountId?: string | null;
  user?: UserWhereUniqueInput | null;
};
