import { arrayProp, Ref, prop } from '@typegoose/typegoose';
import { User } from './user.model';

export class UserGroup {
  public id: string;

  @prop({ required: true, ref: User })
  public adminUser!: User;

  @arrayProp({ ref: User })
  public users?: Ref<User[]>;
}
