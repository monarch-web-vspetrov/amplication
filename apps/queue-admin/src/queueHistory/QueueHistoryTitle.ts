import { QueueHistory as TQueueHistory } from "../api/queueHistory/QueueHistory";

export const QUEUEHISTORY_TITLE_FIELD = "id";

export const QueueHistoryTitle = (record: TQueueHistory): string => {
  return record.id?.toString() || String(record.id);
};
