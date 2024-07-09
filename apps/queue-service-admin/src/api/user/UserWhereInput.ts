import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { QueueListRelationFilter } from "../queue/QueueListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  registrationDate?: DateTimeNullableFilter;
  userType?: StringNullableFilter;
  lastModifiedDate?: DateTimeNullableFilter;
  queues?: QueueListRelationFilter;
};
