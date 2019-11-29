import { TypegooseClass } from 'nestjs-typegoose/dist/typegoose-class.interface';
import { TypegooseClassWithOptions } from 'nestjs-typegoose/dist/typegoose.providers';
import { SchemaOptions } from 'mongoose';

import mongoOptions from '../../config/mongo.config';

// Workaround for global schema options provided by:
// https://github.com/kpfromer/nestjs-typegoose/issues/30#issuecomment-528452508
export const typegooseOptions = (
  typegooseClass: TypegooseClass,
  extraOptions: SchemaOptions = {},
): TypegooseClassWithOptions => ({
  typegooseClass,
  schemaOptions: {
    ...mongoOptions,
    ...extraOptions,
  },
});
