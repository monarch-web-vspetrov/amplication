import { InputJsonValue } from "../../types";
import { QueueCreateNestedManyWithoutUsersInput } from "./QueueCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  registrationDate?: Date | null;
  userType?: string | null;
  lastModifiedDate?: Date | null;
  queues?: QueueCreateNestedManyWithoutUsersInput;
};
