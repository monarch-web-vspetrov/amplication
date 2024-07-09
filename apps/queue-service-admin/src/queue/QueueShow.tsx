import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CAR_TITLE_FIELD } from "../car/CarTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const QueueShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="status" source="status" />
        <ReferenceField label="Car" source="car.id" reference="Car">
          <TextField source={CAR_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Service" source="service.id" reference="Service">
          <TextField source={SERVICE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
