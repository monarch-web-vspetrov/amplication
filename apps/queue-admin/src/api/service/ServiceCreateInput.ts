import { QueueCreateNestedManyWithoutServicesInput } from "./QueueCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  serviceName?: string | null;
  cost?: number | null;
  timeSpend?: number | null;
  queues?: QueueCreateNestedManyWithoutServicesInput;
};
