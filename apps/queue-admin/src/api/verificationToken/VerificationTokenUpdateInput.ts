import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VerificationTokenUpdateInput = {
  identifier?: string | null;
  token?: string | null;
  expires?: Date | null;
  user?: UserWhereUniqueInput | null;
};
