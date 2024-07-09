import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CAR_TITLE_FIELD } from "../car/CarTitle";
import { SERVICE_TITLE_FIELD } from "./ServiceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ServiceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="serviceName" source="serviceName" />
        <TextField label="price" source="price" />
        <TextField label="estimatedTime" source="estimatedTime" />
        <ReferenceManyField reference="Queue" target="serviceId" label="Queues">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="status" source="status" />
            <ReferenceField label="Car" source="car.id" reference="Car">
              <TextField source={CAR_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Service"
              source="service.id"
              reference="Service"
            >
              <TextField source={SERVICE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
