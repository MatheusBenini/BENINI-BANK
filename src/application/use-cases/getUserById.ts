import { BankRepository } from '@/domain/repositories/BankRepository';

export function createGetUserById(repository: BankRepository) {
  return (id: string) => repository.getUserById(id);
}
