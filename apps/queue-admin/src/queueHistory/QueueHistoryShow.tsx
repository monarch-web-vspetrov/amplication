import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { QUEUE_TITLE_FIELD } from "../queue/QueueTitle";
import { QUEUESTATUS_TITLE_FIELD } from "../queueStatus/QueueStatusTitle";

export const QueueHistoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
