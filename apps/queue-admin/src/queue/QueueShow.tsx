import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { QUEUE_TITLE_FIELD } from "./QueueTitle";
import { QUEUESTATUS_TITLE_FIELD } from "../queueStatus/QueueStatusTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CAR_TITLE_FIELD } from "../car/CarTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";

export const QueueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Service" source="service.id" reference="Service">
          <TextField source={SERVICE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="QueueHistory"
          target="queueId"
          label="QueueHistories"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="queueId" source="queueId" />
            <TextField label="oldStatusId" source="oldStatusId" />
            <TextField label="newStatusId" source="newStatusId" />
            <TextField label="changedAt" source="changedAt" />
            <ReferenceField label="Queue" source="queue.id" reference="Queue">
              <TextField source={QUEUE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="QueueStatus"
              source="queuestatus.id"
              reference="QueueStatus"
            >
              <TextField source={QUEUESTATUS_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
