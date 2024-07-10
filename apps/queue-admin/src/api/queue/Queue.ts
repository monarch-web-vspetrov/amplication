import { User } from "../user/User";
import { Car } from "../car/Car";
import { QueueStatus } from "../queueStatus/QueueStatus";
import { QueueHistory } from "../queueHistory/QueueHistory";
import { Service } from "../service/Service";

export type Queue = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  position: number | null;
  box: number | null;
  userId: string | null;
  userPhone: string | null;
  carId: number | null;
  carType: number | null;
  joinInQueue: Date | null;
  statusId: number | null;
  finished: Date | null;
  carLeave: boolean | null;
  serviceId: number | null;
  user?: User | null;
  car?: Car | null;
  queueStatus?: QueueStatus | null;
  queueHistories?: Array<QueueHistory>;
  service?: Service | null;
};
