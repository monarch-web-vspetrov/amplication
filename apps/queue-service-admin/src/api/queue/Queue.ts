import { Car } from "../car/Car";
import { Service } from "../service/Service";
import { User } from "../user/User";

export type Queue = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: string | null;
  car?: Car | null;
  service?: Service | null;
  user?: User | null;
};
