import { CarTypeWhereInput } from "./CarTypeWhereInput";
import { CarTypeOrderByInput } from "./CarTypeOrderByInput";

export type CarTypeFindManyArgs = {
  where?: CarTypeWhereInput;
  orderBy?: Array<CarTypeOrderByInput>;
  skip?: number;
  take?: number;
};
