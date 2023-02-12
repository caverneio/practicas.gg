// Generated by Xata Codegen 0.21.0. Please do not edit.
import { buildClient } from "@xata.io/client";
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "JobOffer",
    columns: [
      { name: "title", type: "string" },
      { name: "detail", type: "text" },
      {
        name: "isAdHonorem",
        type: "bool",
        notNull: true,
        defaultValue: "false",
      },
      { name: "publishedAt", type: "datetime" },
      { name: "company", type: "string" },
      { name: "location", type: "string" },
      { name: "detailHTML", type: "text" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type JobOffer = InferredTypes["JobOffer"];
export type JobOfferRecord = JobOffer & XataRecord;

export type DatabaseSchema = {
  JobOffer: JobOfferRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://first-job-l4j85m.us-east-1.xata.sh/db/jobs",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};
