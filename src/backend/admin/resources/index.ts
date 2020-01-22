import mongoose from 'mongoose';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default (connection: mongoose.Connection): Array<any> => {
  // eslint-disable-next-line no-empty-pattern
  const {} = connection.models;

  return [];
};
