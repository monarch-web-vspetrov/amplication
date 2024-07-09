import { QueueCreateNestedManyWithoutCarsInput } from "./QueueCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  carNumber?: string | null;
  brand?: string | null;
  carType?: string | null;
  queues?: QueueCreateNestedManyWithoutCarsInput;
};
