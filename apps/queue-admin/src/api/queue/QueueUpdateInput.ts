import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { QueueStatusWhereUniqueInput } from "../queueStatus/QueueStatusWhereUniqueInput";
import { QueueHistoryUpdateManyWithoutQueuesInput } from "./QueueHistoryUpdateManyWithoutQueuesInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type QueueUpdateInput = {
  position?: number | null;
  box?: number | null;
  userId?: string | null;
  userPhone?: string | null;
  carId?: number | null;
  carType?: number | null;
  joinInQueue?: Date | null;
  statusId?: number | null;
  finished?: Date | null;
  carLeave?: boolean | null;
  serviceId?: number | null;
  user?: UserWhereUniqueInput | null;
  car?: CarWhereUniqueInput | null;
  queueStatus?: QueueStatusWhereUniqueInput | null;
  queueHistories?: QueueHistoryUpdateManyWithoutQueuesInput;
  service?: ServiceWhereUniqueInput | null;
};
