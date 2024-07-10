import { User } from "../user/User";

export type VerificationToken = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  identifier: string | null;
  token: string | null;
  expires: Date | null;
  user?: User | null;
};
