import { InputJsonValue } from "../../types";
import { QueueUpdateManyWithoutUsersInput } from "./QueueUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  registrationDate?: Date | null;
  userType?: string | null;
  lastModifiedDate?: Date | null;
  queues?: QueueUpdateManyWithoutUsersInput;
};