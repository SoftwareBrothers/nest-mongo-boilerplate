import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';

import { typegooseOptions } from '../database/utils/global-schema-options';

import { User } from './user.model';
import { UserGroup } from './user-group.model';

@Module({
  imports: [TypegooseModule.forFeature([typegooseOptions(User), UserGroup])],
})
export class UserModule {}
