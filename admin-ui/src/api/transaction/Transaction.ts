import { Customer } from "../customer/Customer";

export type Transaction = {
  amount: string | null;
  createdAt: Date;
  customers?: Array<Customer>;
  date: Date | null;
  description: string | null;
  id: string;
  updatedAt: Date;
};
