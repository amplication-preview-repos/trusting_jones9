import { ProtobufDataWhereInput } from "./ProtobufDataWhereInput";
import { ProtobufDataOrderByInput } from "./ProtobufDataOrderByInput";

export type ProtobufDataFindManyArgs = {
  where?: ProtobufDataWhereInput;
  orderBy?: Array<ProtobufDataOrderByInput>;
  skip?: number;
  take?: number;
};
