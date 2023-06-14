import { Ab as TAb } from "../api/ab/Ab";

export const AB_TITLE_FIELD = "firstName";

export const AbTitle = (record: TAb): string => {
  return record.firstName || String(record.id);
};
