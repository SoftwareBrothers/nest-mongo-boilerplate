import { prop } from '@typegoose/typegoose';

class Admin {
  @prop({ required: true })
  public email!: string;

  @prop({ required: true })
  public password!: string;
}

export default Admin;
