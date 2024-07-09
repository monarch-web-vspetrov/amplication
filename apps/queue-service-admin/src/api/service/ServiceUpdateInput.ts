import { QueueUpdateManyWithoutServicesInput } from "./QueueUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  serviceName?: string | null;
  price?: number | null;
  estimatedTime?: number | null;
  queues?: QueueUpdateManyWithoutServicesInput;
};
