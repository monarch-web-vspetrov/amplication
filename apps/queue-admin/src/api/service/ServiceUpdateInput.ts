import { QueueUpdateManyWithoutServicesInput } from "./QueueUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  serviceName?: string | null;
  cost?: number | null;
  timeSpend?: number | null;
  queues?: QueueUpdateManyWithoutServicesInput;
};
