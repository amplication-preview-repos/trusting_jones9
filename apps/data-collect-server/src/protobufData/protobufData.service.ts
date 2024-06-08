import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProtobufDataServiceBase } from "./base/protobufData.service.base";

@Injectable()
export class ProtobufDataService extends ProtobufDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
