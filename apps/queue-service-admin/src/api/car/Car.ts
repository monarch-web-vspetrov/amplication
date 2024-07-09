import { Queue } from "../queue/Queue";

export type Car = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  carNumber: string | null;
  brand: string | null;
  carType: string | null;
  queues?: Array<Queue>;
};
