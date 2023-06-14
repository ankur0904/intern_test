import { AbUpdateManyWithoutAddressesInput } from "./AbUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: AbUpdateManyWithoutAddressesInput;
  state?: string | null;
  zip?: number | null;
};
