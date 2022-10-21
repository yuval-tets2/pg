import { Transaction } from "../transaction/Transaction";

export type Customer = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  transaction?: Transaction | null;
  updatedAt: Date;
};
