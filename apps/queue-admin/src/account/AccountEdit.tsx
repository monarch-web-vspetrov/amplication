import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const AccountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="refresh_token" source="refreshToken" />
        <TextInput label="access_token" source="accessToken" />
        <NumberInput step={1} label="expires_at" source="expiresAt" />
        <TextInput label="token_type" source="tokenType" />
        <TextInput label="scope" source="scope" />
        <TextInput label="id_token" source="idToken" />
        <TextInput label="session_state" source="sessionState" />
        <NumberInput
          step={1}
          label="refresh_token_expires_in"
          source="refreshTokenExpiresIn"
        />
        <TextInput label="userId" source="userId" />
        <TextInput label="type" source="typeField" />
        <TextInput label="provider" source="provider" />
        <TextInput label="providerAccountId" source="providerAccountId" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
