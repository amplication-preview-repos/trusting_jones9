import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProtobufDataService } from "./protobufData.service";
import { ProtobufDataControllerBase } from "./base/protobufData.controller.base";

@swagger.ApiTags("protobufData")
@common.Controller("protobufData")
export class ProtobufDataController extends ProtobufDataControllerBase {
  constructor(protected readonly service: ProtobufDataService) {
    super(service);
  }
}
