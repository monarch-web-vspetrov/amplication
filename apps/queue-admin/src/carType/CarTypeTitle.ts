import { CarType as TCarType } from "../api/carType/CarType";

export const CARTYPE_TITLE_FIELD = "typeField";

export const CarTypeTitle = (record: TCarType): string => {
  return record.typeField?.toString() || String(record.id);
};
