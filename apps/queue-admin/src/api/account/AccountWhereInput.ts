import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  id?: StringFilter;
  refreshToken?: StringNullableFilter;
  accessToken?: StringNullableFilter;
  expiresAt?: IntNullableFilter;
  tokenType?: StringNullableFilter;
  scope?: StringNullableFilter;
  idToken?: StringNullableFilter;
  sessionState?: StringNullableFilter;
  refreshTokenExpiresIn?: IntNullableFilter;
  userId?: StringNullableFilter;
  typeField?: StringNullableFilter;
  provider?: StringNullableFilter;
  providerAccountId?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
