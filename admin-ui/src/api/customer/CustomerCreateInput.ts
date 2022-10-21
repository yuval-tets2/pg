import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type CustomerCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  transaction?: TransactionWhereUniqueInput | null;
};
