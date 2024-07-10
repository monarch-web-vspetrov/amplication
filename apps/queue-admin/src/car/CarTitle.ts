import { Car as TCar } from "../api/car/Car";

export const CAR_TITLE_FIELD = "userId";

export const CarTitle = (record: TCar): string => {
  return record.userId?.toString() || String(record.id);
};
