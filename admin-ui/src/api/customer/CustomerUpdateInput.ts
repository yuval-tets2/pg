import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type CustomerUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  transaction?: TransactionWhereUniqueInput | null;
};
