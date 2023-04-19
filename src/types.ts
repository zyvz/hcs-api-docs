import { OpenAPIV3 } from 'openapi-types';

export enum Level {
  property = 'property',
  block = 'block',
  blockgroup = 'blockgroup',
  zip = 'zip',
  metrodiv = 'metrodiv',
  msa = 'msa',
  state = 'state',
}

type RequestSchemaObjectProperty = Omit<OpenAPIV3.SchemaObject, 'required'> & {
  required?: boolean;
};

export type RequestSchemaObject = Omit<OpenAPIV3.SchemaObject, 'properties'> & {
  properties: Record<string, RequestSchemaObjectProperty>;
};

export interface Endpoint {
  version?: number;
  summary: string;
  description: string;
  target: string;
  level: Level;
  customParams?: OpenAPIV3.ParameterObject[];
  schema: OpenAPIV3.SchemaObject;
}
