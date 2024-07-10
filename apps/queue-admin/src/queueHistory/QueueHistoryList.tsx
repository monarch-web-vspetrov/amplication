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
import { QUEUE_TITLE_FIELD } from "../queue/QueueTitle";
import { QUEUESTATUS_TITLE_FIELD } from "../queueStatus/QueueStatusTitle";

export const QueueHistoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"QueueHistories"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
