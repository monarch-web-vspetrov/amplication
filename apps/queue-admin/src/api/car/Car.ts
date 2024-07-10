import { User } from "../user/User";
import { CarBrand } from "../carBrand/CarBrand";
import { CarType } from "../carType/CarType";
import { Queue } from "../queue/Queue";

export type Car = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string | null;
  brandId: number | null;
  carTypeId: number | null;
  model: string | null;
  carNumber: string | null;
  user?: User | null;
  carBrand?: CarBrand | null;
  carType?: CarType | null;
  queues?: Array<Queue>;
};
