import { Queue } from "../queue/Queue";
import { QueueHistory } from "../queueHistory/QueueHistory";

export type QueueStatus = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  statusName: string | null;
  queues?: Array<Queue>;
  queueHistories?: Array<QueueHistory>;
};
