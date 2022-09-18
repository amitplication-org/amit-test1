/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SettingWhereInput } from "./SettingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SettingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SettingWhereInput,
  })
  @ValidateNested()
  @Type(() => SettingWhereInput)
  @IsOptional()
  @Field(() => SettingWhereInput, {
    nullable: true,
  })
  every?: SettingWhereInput;

  @ApiProperty({
    required: false,
    type: () => SettingWhereInput,
  })
  @ValidateNested()
  @Type(() => SettingWhereInput)
  @IsOptional()
  @Field(() => SettingWhereInput, {
    nullable: true,
  })
  some?: SettingWhereInput;

  @ApiProperty({
    required: false,
    type: () => SettingWhereInput,
  })
  @ValidateNested()
  @Type(() => SettingWhereInput)
  @IsOptional()
  @Field(() => SettingWhereInput, {
    nullable: true,
  })
  none?: SettingWhereInput;
}
export { SettingListRelationFilter };