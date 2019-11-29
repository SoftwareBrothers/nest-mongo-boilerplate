import { prop } from '@typegoose/typegoose';

import { Gender } from './gender.enum';

export class User {
  public id: string;

  @prop()
  public name?: string;

  @prop({ required: true, trim: true, unique: true })
  public email!: string;

  @prop({ required: true })
  public password!: string;

  @prop({ enum: Gender, required: true })
  public gender!: Gender;
}
