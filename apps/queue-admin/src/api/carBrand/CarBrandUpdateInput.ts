import { CarUpdateManyWithoutCarBrandsInput } from "./CarUpdateManyWithoutCarBrandsInput";

export type CarBrandUpdateInput = {
  brandName?: string | null;
  cars?: CarUpdateManyWithoutCarBrandsInput;
};
