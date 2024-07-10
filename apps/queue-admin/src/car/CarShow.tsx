import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CAR_TITLE_FIELD } from "./CarTitle";
import { QUEUESTATUS_TITLE_FIELD } from "../queueStatus/QueueStatusTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";
import { CARBRAND_TITLE_FIELD } from "../carBrand/CarBrandTitle";
import { CARTYPE_TITLE_FIELD } from "../carType/CarTypeTitle";

export const CarShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="userId" source="userId" />
        <TextField label="brandId" source="brandId" />
        <TextField label="carTypeId" source="carTypeId" />
        <TextField label="model" source="model" />
        <TextField label="carNumber" source="carNumber" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="CarBrand"
          source="carbrand.id"
          reference="CarBrand"
        >
          <TextField source={CARBRAND_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="CarType" source="cartype.id" reference="CarType">
          <TextField source={CARTYPE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Queue" target="carId" label="Queues">
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
