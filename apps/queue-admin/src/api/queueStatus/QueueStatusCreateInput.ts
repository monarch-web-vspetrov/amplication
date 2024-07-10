import { QueueCreateNestedManyWithoutQueueStatusesInput } from "./QueueCreateNestedManyWithoutQueueStatusesInput";
import { QueueHistoryCreateNestedManyWithoutQueueStatusesInput } from "./QueueHistoryCreateNestedManyWithoutQueueStatusesInput";

export type QueueStatusCreateInput = {
  statusName?: string | null;
  queues?: QueueCreateNestedManyWithoutQueueStatusesInput;
  queueHistories?: QueueHistoryCreateNestedManyWithoutQueueStatusesInput;
};
