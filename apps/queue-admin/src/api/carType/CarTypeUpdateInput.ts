import { CarUpdateManyWithoutCarTypesInput } from "./CarUpdateManyWithoutCarTypesInput";

export type CarTypeUpdateInput = {
  typeField?: string | null;
  cars?: CarUpdateManyWithoutCarTypesInput;
};
