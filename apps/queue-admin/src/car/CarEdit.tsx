import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { CarBrandTitle } from "../carBrand/CarBrandTitle";
import { CarTypeTitle } from "../carType/CarTypeTitle";
import { QueueTitle } from "../queue/QueueTitle";

export const CarEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="userId" source="userId" />
        <NumberInput step={1} label="brandId" source="brandId" />
        <NumberInput step={1} label="carTypeId" source="carTypeId" />
        <TextInput label="model" source="model" />
        <TextInput label="carNumber" source="carNumber" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="carBrand.id"
          reference="CarBrand"
          label="CarBrand"
        >
          <SelectInput optionText={CarBrandTitle} />
        </ReferenceInput>
        <ReferenceInput source="carType.id" reference="CarType" label="CarType">
          <SelectInput optionText={CarTypeTitle} />
        </ReferenceInput>
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
