import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TransactionWhereUniqueInput } from "../transaction/TransactionWhereUniqueInput";

export type CustomerWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  transaction?: TransactionWhereUniqueInput;
};
