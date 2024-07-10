import { Car } from "../car/Car";

export type CarType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  typeField: string | null;
  cars?: Array<Car>;
};
