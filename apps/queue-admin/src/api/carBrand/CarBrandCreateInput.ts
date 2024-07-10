import { CarCreateNestedManyWithoutCarBrandsInput } from "./CarCreateNestedManyWithoutCarBrandsInput";

export type CarBrandCreateInput = {
  brandName?: string | null;
  cars?: CarCreateNestedManyWithoutCarBrandsInput;
};
