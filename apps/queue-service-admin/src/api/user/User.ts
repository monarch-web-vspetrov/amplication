import { JsonValue } from "type-fest";
import { Queue } from "../queue/Queue";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  registrationDate: Date | null;
  userType: string | null;
  lastModifiedDate: Date | null;
  queues?: Array<Queue>;
};
