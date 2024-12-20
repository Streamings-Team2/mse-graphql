import { Params } from "../models/models";

export const buildParms = (params: Params): string => {
  let query: string = Object.keys(params)
    .filter((key: any) => params[key] !== "" && params[key] != null)
    .map(
      (key: any) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join("&");
  if (query.length > 0) query = "?" + query;
  return query;
};
