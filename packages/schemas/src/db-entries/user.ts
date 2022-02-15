// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { z } from 'zod';

import {
  RoleNames,
  roleNamesGuard,
  Identities,
  identitiesGuard,
  CustomData,
  customDataGuard,
  GeneratedSchema,
  Guard,
} from '../foundations';
import { PasswordEncryptionMethod } from './custom-types';

export type CreateUser = {
  id: string;
  username?: string | null;
  primaryEmail?: string | null;
  primaryPhone?: string | null;
  passwordEncrypted?: string | null;
  passwordEncryptionMethod?: PasswordEncryptionMethod | null;
  passwordEncryptionSalt?: string | null;
  name?: string | null;
  avatar?: string | null;
  roleNames?: RoleNames;
  identities?: Identities;
  customData?: CustomData;
};

export type User = {
  id: string;
  username: string | null;
  primaryEmail: string | null;
  primaryPhone: string | null;
  passwordEncrypted: string | null;
  passwordEncryptionMethod: PasswordEncryptionMethod | null;
  passwordEncryptionSalt: string | null;
  name: string | null;
  avatar: string | null;
  roleNames: RoleNames;
  identities: Identities;
  customData: CustomData;
};

const createGuard: Guard<CreateUser> = z.object({
  id: z.string(),
  username: z.string().nullable().optional(),
  primaryEmail: z.string().nullable().optional(),
  primaryPhone: z.string().nullable().optional(),
  passwordEncrypted: z.string().nullable().optional(),
  passwordEncryptionMethod: z.nativeEnum(PasswordEncryptionMethod).nullable().optional(),
  passwordEncryptionSalt: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
  avatar: z.string().nullable().optional(),
  roleNames: roleNamesGuard.optional(),
  identities: identitiesGuard.optional(),
  customData: customDataGuard.optional(),
});

export const Users: GeneratedSchema<CreateUser> = Object.freeze({
  table: 'users',
  tableSingular: 'user',
  fields: {
    id: 'id',
    username: 'username',
    primaryEmail: 'primary_email',
    primaryPhone: 'primary_phone',
    passwordEncrypted: 'password_encrypted',
    passwordEncryptionMethod: 'password_encryption_method',
    passwordEncryptionSalt: 'password_encryption_salt',
    name: 'name',
    avatar: 'avatar',
    roleNames: 'role_names',
    identities: 'identities',
    customData: 'custom_data',
  },
  fieldKeys: [
    'id',
    'username',
    'primaryEmail',
    'primaryPhone',
    'passwordEncrypted',
    'passwordEncryptionMethod',
    'passwordEncryptionSalt',
    'name',
    'avatar',
    'roleNames',
    'identities',
    'customData',
  ],
  createGuard,
});
