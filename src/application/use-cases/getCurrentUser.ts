import { BankRepository } from '@/domain/repositories/BankRepository';

export function createGetCurrentUser(repository: BankRepository) {
  return () => repository.getCurrentUser();
}
