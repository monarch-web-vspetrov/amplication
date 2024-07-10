import { Queue } from "../queue/Queue";
import { QueueStatus } from "../queueStatus/QueueStatus";

export type QueueHistory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  queueId: number | null;
  oldStatusId: number | null;
  newStatusId: number | null;
  changedAt: Date | null;
  queue?: Queue | null;
  queueStatus?: QueueStatus | null;
};
