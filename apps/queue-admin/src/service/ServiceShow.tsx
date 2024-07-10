import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CAR_TITLE_FIELD } from "../car/CarTitle";
import { QUEUESTATUS_TITLE_FIELD } from "../queueStatus/QueueStatusTitle";
import { SERVICE_TITLE_FIELD } from "./ServiceTitle";

export const ServiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="serviceName" source="serviceName" />
        <TextField label="cost" source="cost" />
        <TextField label="timeSpend" source="timeSpend" />
        <ReferenceManyField reference="Queue" target="serviceId" label="Queues">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="position" source="position" />
            <TextField label="box" source="box" />
            <TextField label="userId" source="userId" />
            <TextField label="userPhone" source="userPhone" />
            <TextField label="carId" source="carId" />
            <TextField label="carType" source="carType" />
            <TextField label="joinInQueue" source="joinInQueue" />
            <TextField label="statusId" source="statusId" />
            <TextField label="finished" source="finished" />
            <BooleanField label="carLeave" source="carLeave" />
            <TextField label="serviceId" source="serviceId" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Car" source="car.id" reference="Car">
              <TextField source={CAR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="QueueStatus"
              source="queuestatus.id"
              reference="QueueStatus"
            >
              <TextField source={QUEUESTATUS_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Service"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
