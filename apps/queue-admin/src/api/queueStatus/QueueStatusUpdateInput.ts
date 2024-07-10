import { QueueUpdateManyWithoutQueueStatusesInput } from "./QueueUpdateManyWithoutQueueStatusesInput";
import { QueueHistoryUpdateManyWithoutQueueStatusesInput } from "./QueueHistoryUpdateManyWithoutQueueStatusesInput";

export type QueueStatusUpdateInput = {
  statusName?: string | null;
  queues?: QueueUpdateManyWithoutQueueStatusesInput;
  queueHistories?: QueueHistoryUpdateManyWithoutQueueStatusesInput;
};
