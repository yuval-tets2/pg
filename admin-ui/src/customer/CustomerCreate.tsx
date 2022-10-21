import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="phone" source="phone" />
        <ReferenceInput
          source="transaction.id"
          reference="Transaction"
          label="Transaction"
        >
          <SelectInput optionText={TransactionTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
