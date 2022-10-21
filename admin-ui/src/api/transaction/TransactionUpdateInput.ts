import { CustomerUpdateManyWithoutTransactionsInput } from "./CustomerUpdateManyWithoutTransactionsInput";

export type TransactionUpdateInput = {
  amount?: string | null;
  customers?: CustomerUpdateManyWithoutTransactionsInput;
  date?: Date | null;
  description?: string | null;
};
