import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VerificationTokenWhereInput = {
  id?: StringFilter;
  identifier?: StringNullableFilter;
  token?: StringNullableFilter;
  expires?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
