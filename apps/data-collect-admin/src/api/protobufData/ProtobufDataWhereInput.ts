import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProtobufDataWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  name?: StringNullableFilter;
};
