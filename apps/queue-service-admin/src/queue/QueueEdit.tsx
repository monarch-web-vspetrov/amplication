import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CarTitle } from "../car/CarTitle";
import { ServiceTitle } from "../service/ServiceTitle";
import { UserTitle } from "../user/UserTitle";

export const QueueEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="status" source="status" />
        <ReferenceInput source="car.id" reference="Car" label="Car">
          <SelectInput optionText={CarTitle} />
        </ReferenceInput>
        <ReferenceInput source="service.id" reference="Service" label="Service">
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
