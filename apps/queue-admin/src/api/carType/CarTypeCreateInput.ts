import { CarCreateNestedManyWithoutCarTypesInput } from "./CarCreateNestedManyWithoutCarTypesInput";

export type CarTypeCreateInput = {
  typeField?: string | null;
  cars?: CarCreateNestedManyWithoutCarTypesInput;
};
