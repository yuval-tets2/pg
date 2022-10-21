import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  amount?: StringNullableFilter;
  customers?: CustomerListRelationFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
};
