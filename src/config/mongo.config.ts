import { SchemaOptions } from 'mongoose';

const mongoOptions: SchemaOptions = {
  toJSON: { versionKey: false },
  toObject: { versionKey: false },
};

export default mongoOptions;
