import { QueueCreateNestedManyWithoutServicesInput } from "./QueueCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  serviceName?: string | null;
  price?: number | null;
  estimatedTime?: number | null;
  queues?: QueueCreateNestedManyWithoutServicesInput;
};
