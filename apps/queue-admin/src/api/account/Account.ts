import { User } from "../user/User";

export type Account = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  refreshToken: string | null;
  accessToken: string | null;
  expiresAt: number | null;
  tokenType: string | null;
  scope: string | null;
  idToken: string | null;
  sessionState: string | null;
  refreshTokenExpiresIn: number | null;
  userId: string | null;
  typeField: string | null;
  provider: string | null;
  providerAccountId: string | null;
  user?: User | null;
};
