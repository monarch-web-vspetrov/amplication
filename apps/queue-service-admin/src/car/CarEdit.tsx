import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QueueTitle } from "../queue/QueueTitle";

export const CarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="carNumber" source="carNumber" />
        <TextInput label="brand" source="brand" />
        <TextInput label="carType" source="carType" />
        <ReferenceArrayInput
          source="queues"
          reference="Queue"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QueueTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
