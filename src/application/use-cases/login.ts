import { BankRepository } from '@/domain/repositories/BankRepository';

export function createLogin(repository: BankRepository) {
  return (email: string, password: string) => repository.login(email, password);
}
