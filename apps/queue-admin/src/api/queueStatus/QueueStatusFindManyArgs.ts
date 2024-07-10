import { QueueStatusWhereInput } from "./QueueStatusWhereInput";
import { QueueStatusOrderByInput } from "./QueueStatusOrderByInput";

export type QueueStatusFindManyArgs = {
  where?: QueueStatusWhereInput;
  orderBy?: Array<QueueStatusOrderByInput>;
  skip?: number;
  take?: number;
};
