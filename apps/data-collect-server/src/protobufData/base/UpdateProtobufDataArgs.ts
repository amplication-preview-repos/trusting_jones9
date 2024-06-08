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
import { ProtobufDataWhereUniqueInput } from "./ProtobufDataWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProtobufDataUpdateInput } from "./ProtobufDataUpdateInput";

@ArgsType()
class UpdateProtobufDataArgs {
  @ApiProperty({
    required: true,
    type: () => ProtobufDataWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProtobufDataWhereUniqueInput)
  @Field(() => ProtobufDataWhereUniqueInput, { nullable: false })
  where!: ProtobufDataWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProtobufDataUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProtobufDataUpdateInput)
  @Field(() => ProtobufDataUpdateInput, { nullable: false })
  data!: ProtobufDataUpdateInput;
}

export { UpdateProtobufDataArgs as UpdateProtobufDataArgs };