import { Car } from "../car/Car";

export type CarBrand = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  brandName: string | null;
  cars?: Array<Car>;
};
