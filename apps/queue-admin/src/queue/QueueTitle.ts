import { Queue as TQueue } from "../api/queue/Queue";

export const QUEUE_TITLE_FIELD = "userId";

export const QueueTitle = (record: TQueue): string => {
  return record.userId?.toString() || String(record.id);
};
