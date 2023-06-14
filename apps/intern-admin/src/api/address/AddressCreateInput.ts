import { AbCreateNestedManyWithoutAddressesInput } from "./AbCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: AbCreateNestedManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
