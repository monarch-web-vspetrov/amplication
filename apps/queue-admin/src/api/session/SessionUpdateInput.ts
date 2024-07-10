import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  sessionToken?: string | null;
  userId?: string | null;
  expires?: Date | null;
  user?: UserWhereUniqueInput | null;
};
