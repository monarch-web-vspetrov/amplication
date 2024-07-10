import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  id?: StringFilter;
  sessionToken?: StringNullableFilter;
  userId?: StringNullableFilter;
  expires?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
