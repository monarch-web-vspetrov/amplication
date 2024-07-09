import { Car as TCar } from "../api/car/Car";

export const CAR_TITLE_FIELD = "carNumber";

export const CarTitle = (record: TCar): string => {
  return record.carNumber?.toString() || String(record.id);
};
