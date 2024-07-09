import { Queue } from "../queue/Queue";

export type Service = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  serviceName: string | null;
  price: number | null;
  estimatedTime: number | null;
  queues?: Array<Queue>;
};
