import mongoose from 'mongoose';
import { ReturnModelType } from '@typegoose/typegoose';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (connection: mongoose.Connection) => {
  const {} = connection.models;

  return [];
};
