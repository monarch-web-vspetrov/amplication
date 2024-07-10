import { Queue } from "../queue/Queue";

export type Service = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  serviceName: string | null;
  cost: number | null;
  timeSpend: number | null;
  queues?: Array<Queue>;
};
