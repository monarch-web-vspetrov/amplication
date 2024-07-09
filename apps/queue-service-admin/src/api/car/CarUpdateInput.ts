import { QueueUpdateManyWithoutCarsInput } from "./QueueUpdateManyWithoutCarsInput";

export type CarUpdateInput = {
  carNumber?: string | null;
  brand?: string | null;
  carType?: string | null;
  queues?: QueueUpdateManyWithoutCarsInput;
};
