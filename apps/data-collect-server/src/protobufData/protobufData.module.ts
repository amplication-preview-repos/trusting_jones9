import { Module } from "@nestjs/common";
import { ProtobufDataModuleBase } from "./base/protobufData.module.base";
import { ProtobufDataService } from "./protobufData.service";
import { ProtobufDataController } from "./protobufData.controller";
import { ProtobufDataResolver } from "./protobufData.resolver";

@Module({
  imports: [ProtobufDataModuleBase],
  controllers: [ProtobufDataController],
  providers: [ProtobufDataService, ProtobufDataResolver],
  exports: [ProtobufDataService],
})
export class ProtobufDataModule {}
