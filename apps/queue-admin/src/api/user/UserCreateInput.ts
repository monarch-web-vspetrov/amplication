import { InputJsonValue } from "../../types";
import { VerificationTokenCreateNestedManyWithoutUsersInput } from "./VerificationTokenCreateNestedManyWithoutUsersInput";
import { CarCreateNestedManyWithoutUsersInput } from "./CarCreateNestedManyWithoutUsersInput";
import { QueueCreateNestedManyWithoutUsersInput } from "./QueueCreateNestedManyWithoutUsersInput";
import { SessionCreateNestedManyWithoutUsersInput } from "./SessionCreateNestedManyWithoutUsersInput";
import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  verificationTokens?: VerificationTokenCreateNestedManyWithoutUsersInput;
  cars?: CarCreateNestedManyWithoutUsersInput;
  queues?: QueueCreateNestedManyWithoutUsersInput;
  sessions?: SessionCreateNestedManyWithoutUsersInput;
  accounts?: AccountCreateNestedManyWithoutUsersInput;
};
