import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type QueueUpdateInput = {
  status?: string | null;
  car?: CarWhereUniqueInput | null;
  service?: ServiceWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
