import { User } from "../user/User";

export type Session = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sessionToken: string | null;
  userId: string | null;
  expires: Date | null;
  user?: User | null;
};
