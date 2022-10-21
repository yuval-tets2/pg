import { CustomerCreateNestedManyWithoutTransactionsInput } from "./CustomerCreateNestedManyWithoutTransactionsInput";

export type TransactionCreateInput = {
  amount?: string | null;
  customers?: CustomerCreateNestedManyWithoutTransactionsInput;
  date?: Date | null;
  description?: string | null;
};
