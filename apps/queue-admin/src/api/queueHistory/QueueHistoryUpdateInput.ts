import { QueueWhereUniqueInput } from "../queue/QueueWhereUniqueInput";
import { QueueStatusWhereUniqueInput } from "../queueStatus/QueueStatusWhereUniqueInput";

export type QueueHistoryUpdateInput = {
  queueId?: number | null;
  oldStatusId?: number | null;
  newStatusId?: number | null;
  changedAt?: Date | null;
  queue?: QueueWhereUniqueInput | null;
  queueStatus?: QueueStatusWhereUniqueInput | null;
};
