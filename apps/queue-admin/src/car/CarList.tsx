import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CARBRAND_TITLE_FIELD } from "../carBrand/CarBrandTitle";
import { CARTYPE_TITLE_FIELD } from "../carType/CarTypeTitle";

export const CarList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cars"}
      perPage={50}
      pagination={<Pagination />}
    >
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
        <ReferenceField label="CarType" source="cartype.id" reference="CarType">
          <TextField source={CARTYPE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
