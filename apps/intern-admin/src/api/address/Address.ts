import { Ab } from "../ab/Ab";

export type Address = {
  address_1: string | null;
  address_2: string | null;
  city: string | null;
  createdAt: Date;
  customers?: Array<Ab>;
  id: string;
  state: string | null;
  updatedAt: Date;
  zip: number | null;
};
