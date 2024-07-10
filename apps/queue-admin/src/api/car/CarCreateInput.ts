import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CarBrandWhereUniqueInput } from "../carBrand/CarBrandWhereUniqueInput";
import { CarTypeWhereUniqueInput } from "../carType/CarTypeWhereUniqueInput";
import { QueueCreateNestedManyWithoutCarsInput } from "./QueueCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  userId?: string | null;
  brandId?: number | null;
  carTypeId?: number | null;
  model?: string | null;
  carNumber?: string | null;
  user?: UserWhereUniqueInput | null;
  carBrand?: CarBrandWhereUniqueInput | null;
  carType?: CarTypeWhereUniqueInput | null;
  queues?: QueueCreateNestedManyWithoutCarsInput;
};
