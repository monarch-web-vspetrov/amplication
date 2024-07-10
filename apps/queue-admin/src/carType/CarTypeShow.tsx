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

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CARBRAND_TITLE_FIELD } from "../carBrand/CarBrandTitle";
import { CARTYPE_TITLE_FIELD } from "./CarTypeTitle";

export const CarTypeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="type" source="typeField" />
        <ReferenceManyField reference="Car" target="carTypeId" label="Cars">
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
      </SimpleShowLayout>
    </Show>
  );
};
