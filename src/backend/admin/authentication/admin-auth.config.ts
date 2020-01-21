import { getModelForClass, mongoose } from '@typegoose/typegoose';
import Argon2 from 'argon2';

import Admin from './admin.model';

type AdminAuthConfig = { authenticate: Function; cookiePassword: string };

const getAdminAuthenticationConfig = async (connection): Promise<AdminAuthConfig> => {
  const AdminModel = getModelForClass(Admin, { existingConnection: connection });

  if (await AdminModel.countDocuments() === 0) {
    await AdminModel.create({
      email: process.env.ADMIN_EMAIL,
      password: await Argon2.hash(process.env.ADMIN_PASSWORD),
    });
  }

  return {
    authenticate: async (email, password): Promise<Admin> => {
      const admin = await AdminModel.findOne({ email });
      const passwordMatch = admin && await Argon2.verify(admin.password, password);
      return passwordMatch && admin;
    },
    cookiePassword: process.env.COOKIE_PASSWORD,
  };
};

export default getAdminAuthenticationConfig;
