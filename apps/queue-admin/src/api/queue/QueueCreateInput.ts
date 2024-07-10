import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { QueueStatusWhereUniqueInput } from "../queueStatus/QueueStatusWhereUniqueInput";
import { QueueHistoryCreateNestedManyWithoutQueuesInput } from "./QueueHistoryCreateNestedManyWithoutQueuesInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";

export type QueueCreateInput = {
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
  queueHistories?: QueueHistoryCreateNestedManyWithoutQueuesInput;
  service?: ServiceWhereUniqueInput | null;
};
