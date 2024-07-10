import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VerificationTokenCreateInput = {
  identifier?: string | null;
  token?: string | null;
  expires?: Date | null;
  user?: UserWhereUniqueInput | null;
};
