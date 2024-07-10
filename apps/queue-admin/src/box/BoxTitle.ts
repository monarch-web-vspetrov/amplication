import { Box as TBox } from "../api/box/Box";

export const BOX_TITLE_FIELD = "id";

export const BoxTitle = (record: TBox): string => {
  return record.id?.toString() || String(record.id);
};
