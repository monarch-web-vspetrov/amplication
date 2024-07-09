import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QueueTitle } from "../queue/QueueTitle";

export const ServiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="serviceName" source="serviceName" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="estimatedTime" source="estimatedTime" />
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