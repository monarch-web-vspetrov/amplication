import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { CarTitle } from "../car/CarTitle";
import { QueueStatusTitle } from "../queueStatus/QueueStatusTitle";
import { QueueHistoryTitle } from "../queueHistory/QueueHistoryTitle";
import { ServiceTitle } from "../service/ServiceTitle";

export const QueueEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="position" source="position" />
        <NumberInput step={1} label="box" source="box" />
        <TextInput label="userId" source="userId" />
        <TextInput label="userPhone" source="userPhone" />
        <NumberInput step={1} label="carId" source="carId" />
        <NumberInput step={1} label="carType" source="carType" />
        <DateTimeInput label="joinInQueue" source="joinInQueue" />
        <NumberInput step={1} label="statusId" source="statusId" />
        <DateTimeInput label="finished" source="finished" />
        <BooleanInput label="carLeave" source="carLeave" />
        <NumberInput step={1} label="serviceId" source="serviceId" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="car.id" reference="Car" label="Car">
          <SelectInput optionText={CarTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="queueStatus.id"
          reference="QueueStatus"
          label="QueueStatus"
        >
          <SelectInput optionText={QueueStatusTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="queueHistories"
          reference="QueueHistory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QueueHistoryTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="service.id" reference="Service" label="Service">
          <SelectInput optionText={ServiceTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
