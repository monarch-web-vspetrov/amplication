import { JsonValue } from "type-fest";
import { VerificationToken } from "../verificationToken/VerificationToken";
import { Car } from "../car/Car";
import { Queue } from "../queue/Queue";
import { Session } from "../session/Session";
import { Account } from "../account/Account";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  verificationTokens?: Array<VerificationToken>;
  cars?: Array<Car>;
  queues?: Array<Queue>;
  sessions?: Array<Session>;
  accounts?: Array<Account>;
};
