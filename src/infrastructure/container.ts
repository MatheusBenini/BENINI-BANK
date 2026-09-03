import { createGetCurrentUser } from '@/application/use-cases/getCurrentUser';
import { createGetUserById } from '@/application/use-cases/getUserById';
import { createLogin } from '@/application/use-cases/login';
import { MockBankRepository } from '@/infrastructure/repositories/MockBankRepository';

const bankRepository = new MockBankRepository();

export const bankUseCases = {
  getCurrentUser: createGetCurrentUser(bankRepository),
  getUserById: createGetUserById(bankRepository),
  login: createLogin(bankRepository),
};
