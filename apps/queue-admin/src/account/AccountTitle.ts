import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "refreshToken";

export const AccountTitle = (record: TAccount): string => {
  return record.refreshToken?.toString() || String(record.id);
};
