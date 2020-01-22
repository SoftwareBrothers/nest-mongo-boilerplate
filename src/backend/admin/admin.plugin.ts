import mongoose from 'mongoose';
import AdminBroExpress from 'admin-bro-expressjs';
import AdminBroMongoose from 'admin-bro-mongoose';
import session from 'express-session';
import connectMongo from 'connect-mongo';
import AdminBro from 'admin-bro';

import config from '../config/admin';
import { Environment } from '../config/environments';

import getAdminAuthenticationConfig from './authentication/admin-auth.config';

const EXPIRED_SESSIONS_REMOVE_INTERVAL = 24 * 60; // in minutes
AdminBro.registerAdapter(AdminBroMongoose);

const getRouterFor = async (adminBro, connection): Promise<object> => {
  if (process.env.NODE_ENV === Environment.DEVELOPMENT) {
    return AdminBroExpress.buildRouter(adminBro);
  }
  const MongoStoreFactory = connectMongo(session);
  return AdminBroExpress.buildAuthenticatedRouter(adminBro, await getAdminAuthenticationConfig(connection), null, {
    httpOnly: false,
    resave: true,
    saveUninitialized: true,
    store: new MongoStoreFactory({
      mongooseConnection: connection,
      autoRemove: 'interval',
      autoRemoveInterval: EXPIRED_SESSIONS_REMOVE_INTERVAL,
    }),
  });
};

export default async (app): Promise<void> => {
  const expressApp = app.getHttpAdapter().getInstance();
  const connection = mongoose && mongoose.connections && mongoose.connections[1];
  if (!connection) {
    throw new Error('Mongoose connection is not configured');
  }
  const adminBro = new AdminBro(config(connection));
  const router = await getRouterFor(adminBro, connection);
  expressApp.use(adminBro.options.rootPath, router);
};
