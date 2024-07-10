import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VerificationTokenListRelationFilter } from "../verificationToken/VerificationTokenListRelationFilter";
import { CarListRelationFilter } from "../car/CarListRelationFilter";
import { QueueListRelationFilter } from "../queue/QueueListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { AccountListRelationFilter } from "../account/AccountListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  verificationTokens?: VerificationTokenListRelationFilter;
  cars?: CarListRelationFilter;
  queues?: QueueListRelationFilter;
  sessions?: SessionListRelationFilter;
  accounts?: AccountListRelationFilter;
};
