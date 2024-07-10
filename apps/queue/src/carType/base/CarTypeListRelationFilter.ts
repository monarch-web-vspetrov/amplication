/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CarTypeWhereInput } from "./CarTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CarTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CarTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => CarTypeWhereInput)
  @IsOptional()
  @Field(() => CarTypeWhereInput, {
    nullable: true,
  })
  every?: CarTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => CarTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => CarTypeWhereInput)
  @IsOptional()
  @Field(() => CarTypeWhereInput, {
    nullable: true,
  })
  some?: CarTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => CarTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => CarTypeWhereInput)
  @IsOptional()
  @Field(() => CarTypeWhereInput, {
    nullable: true,
  })
  none?: CarTypeWhereInput;
}
export { CarTypeListRelationFilter as CarTypeListRelationFilter };
