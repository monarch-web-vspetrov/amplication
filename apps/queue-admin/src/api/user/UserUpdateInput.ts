import { InputJsonValue } from "../../types";
import { VerificationTokenUpdateManyWithoutUsersInput } from "./VerificationTokenUpdateManyWithoutUsersInput";
import { CarUpdateManyWithoutUsersInput } from "./CarUpdateManyWithoutUsersInput";
import { QueueUpdateManyWithoutUsersInput } from "./QueueUpdateManyWithoutUsersInput";
import { SessionUpdateManyWithoutUsersInput } from "./SessionUpdateManyWithoutUsersInput";
import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  verificationTokens?: VerificationTokenUpdateManyWithoutUsersInput;
  cars?: CarUpdateManyWithoutUsersInput;
  queues?: QueueUpdateManyWithoutUsersInput;
  sessions?: SessionUpdateManyWithoutUsersInput;
  accounts?: AccountUpdateManyWithoutUsersInput;
};
