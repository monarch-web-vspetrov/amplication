import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  DateTimeInput,
  ReferenceArrayInput,
} from "react-admin";

import { QueueTitle } from "../queue/QueueTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
        <TextInput label="Username" source="username" />
        <TextInput label="Email" source="email" type="email" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="registrationDate" source="registrationDate" />
        <TextInput label="userType" source="userType" />
        <DateTimeInput label="lastModifiedDate" source="lastModifiedDate" />
        <ReferenceArrayInput
          source="queues"
          reference="Queue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QueueTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
