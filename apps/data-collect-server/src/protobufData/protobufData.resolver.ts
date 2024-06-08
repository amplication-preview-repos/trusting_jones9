import * as graphql from "@nestjs/graphql";
import { ProtobufDataResolverBase } from "./base/protobufData.resolver.base";
import { ProtobufData } from "./base/ProtobufData";
import { ProtobufDataService } from "./protobufData.service";

@graphql.Resolver(() => ProtobufData)
export class ProtobufDataResolver extends ProtobufDataResolverBase {
  constructor(protected readonly service: ProtobufDataService) {
    super(service);
  }
}
