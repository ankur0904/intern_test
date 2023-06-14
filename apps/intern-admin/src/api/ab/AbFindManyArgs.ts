import { AbWhereInput } from "./AbWhereInput";
import { AbOrderByInput } from "./AbOrderByInput";

export type AbFindManyArgs = {
  where?: AbWhereInput;
  orderBy?: Array<AbOrderByInput>;
  skip?: number;
  take?: number;
};
