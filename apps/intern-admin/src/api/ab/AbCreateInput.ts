import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { OrderCreateNestedManyWithoutAbsInput } from "./OrderCreateNestedManyWithoutAbsInput";

export type AbCreateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutAbsInput;
  phone?: string | null;
};
