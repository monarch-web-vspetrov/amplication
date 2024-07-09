import { Queue as TQueue } from "../api/queue/Queue";

export const QUEUE_TITLE_FIELD = "status";

export const QueueTitle = (record: TQueue): string => {
  return record.status?.toString() || String(record.id);
};
