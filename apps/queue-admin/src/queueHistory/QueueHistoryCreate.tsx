import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { QueueTitle } from "../queue/QueueTitle";
import { QueueStatusTitle } from "../queueStatus/QueueStatusTitle";

export const QueueHistoryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="queueId" source="queueId" />
        <NumberInput step={1} label="oldStatusId" source="oldStatusId" />
        <NumberInput step={1} label="newStatusId" source="newStatusId" />
        <DateTimeInput label="changedAt" source="changedAt" />
        <ReferenceInput source="queue.id" reference="Queue" label="Queue">
          <SelectInput optionText={QueueTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="queueStatus.id"
          reference="QueueStatus"
          label="QueueStatus"
        >
          <SelectInput optionText={QueueStatusTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
