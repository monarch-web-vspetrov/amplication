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
import {
  IsString,
  MaxLength,
  IsOptional,
  IsInt,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { CarBrandWhereUniqueInput } from "../../carBrand/base/CarBrandWhereUniqueInput";
import { CarTypeWhereUniqueInput } from "../../carType/base/CarTypeWhereUniqueInput";
import { QueueUpdateManyWithoutCarsInput } from "./QueueUpdateManyWithoutCarsInput";

@InputType()
class CarUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  userId?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  brandId?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  carTypeId?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  model?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  carNumber?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CarBrandWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CarBrandWhereUniqueInput)
  @IsOptional()
  @Field(() => CarBrandWhereUniqueInput, {
    nullable: true,
  })
  carBrand?: CarBrandWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CarTypeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CarTypeWhereUniqueInput)
  @IsOptional()
  @Field(() => CarTypeWhereUniqueInput, {
    nullable: true,
  })
  carType?: CarTypeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QueueUpdateManyWithoutCarsInput,
  })
  @ValidateNested()
  @Type(() => QueueUpdateManyWithoutCarsInput)
  @IsOptional()
  @Field(() => QueueUpdateManyWithoutCarsInput, {
    nullable: true,
  })
  queues?: QueueUpdateManyWithoutCarsInput;
}

export { CarUpdateInput as CarUpdateInput };
