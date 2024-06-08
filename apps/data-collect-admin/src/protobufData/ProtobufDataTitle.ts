import { ProtobufData as TProtobufData } from "../api/protobufData/ProtobufData";

export const PROTOBUFDATA_TITLE_FIELD = "name";

export const ProtobufDataTitle = (record: TProtobufData): string => {
  return record.name?.toString() || String(record.id);
};
