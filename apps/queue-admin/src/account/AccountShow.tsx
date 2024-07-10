import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const AccountShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="refresh_token" source="refreshToken" />
        <TextField label="access_token" source="accessToken" />
        <TextField label="expires_at" source="expiresAt" />
        <TextField label="token_type" source="tokenType" />
        <TextField label="scope" source="scope" />
        <TextField label="id_token" source="idToken" />
        <TextField label="session_state" source="sessionState" />
        <TextField
          label="refresh_token_expires_in"
          source="refreshTokenExpiresIn"
        />
        <TextField label="userId" source="userId" />
        <TextField label="type" source="typeField" />
        <TextField label="provider" source="provider" />
        <TextField label="providerAccountId" source="providerAccountId" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
