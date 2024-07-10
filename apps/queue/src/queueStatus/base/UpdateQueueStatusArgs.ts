/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QueueStatusWhereUniqueInput } from "./QueueStatusWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { QueueStatusUpdateInput } from "./QueueStatusUpdateInput";

@ArgsType()
class UpdateQueueStatusArgs {
  @ApiProperty({
    required: true,
    type: () => QueueStatusWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QueueStatusWhereUniqueInput)
  @Field(() => QueueStatusWhereUniqueInput, { nullable: false })
  where!: QueueStatusWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => QueueStatusUpdateInput,
  })
  @ValidateNested()
  @Type(() => QueueStatusUpdateInput)
  @Field(() => QueueStatusUpdateInput, { nullable: false })
  data!: QueueStatusUpdateInput;
}

export { UpdateQueueStatusArgs as UpdateQueueStatusArgs };