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
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { CARBRAND_TITLE_FIELD } from "../carBrand/CarBrandTitle";
import { CARTYPE_TITLE_FIELD } from "../carType/CarTypeTitle";
import { CAR_TITLE_FIELD } from "../car/CarTitle";
import { QUEUESTATUS_TITLE_FIELD } from "../queueStatus/QueueStatusTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Username" source="username" />
        <TextField label="Email" source="email" />
        <TextField label="Roles" source="roles" />
        <ReferenceManyField
          reference="VerificationToken"
          target="userId"
          label="VerificationTokens"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="identifier" source="identifier" />
            <TextField label="token" source="token" />
            <TextField label="expires" source="expires" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Car" target="userId" label="Cars">
          <Datagrid rowClick="show">
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
            <ReferenceField
              label="CarType"
              source="cartype.id"
              reference="CarType"
            >
              <TextField source={CARTYPE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Queue" target="userId" label="Queues">
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
        <ReferenceManyField
          reference="Session"
          target="userId"
          label="Sessions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="sessionToken" source="sessionToken" />
            <TextField label="userId" source="userId" />
            <TextField label="expires" source="expires" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Account"
          target="userId"
          label="Accounts"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="refresh_token" source="refreshToken" />
            <TextField label="access_token" source="accessToken" />
            <TextField label="expires_at" source="expiresAt" />
            <TextField label="token_type" source="tokenType" />
            <TextField label="scope" source="scope" />
            <TextField label="id_token" source="idToken" />
            <TextField label="session_state" source="sessionState" />
            <TextField
              label="refresh_token_expires_in"
              source="refreshTokenExpiresIn"
            />
            <TextField label="userId" source="userId" />
            <TextField label="type" source="typeField" />
            <TextField label="provider" source="provider" />
            <TextField label="providerAccountId" source="providerAccountId" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
