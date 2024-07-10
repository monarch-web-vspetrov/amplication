import { QueueStatus as TQueueStatus } from "../api/queueStatus/QueueStatus";

export const QUEUESTATUS_TITLE_FIELD = "statusName";

export const QueueStatusTitle = (record: TQueueStatus): string => {
  return record.statusName?.toString() || String(record.id);
};
