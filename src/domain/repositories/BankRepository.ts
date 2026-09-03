import { BankUser } from '@/domain/entities/bank';

export interface BankRepository {
  login(email: string, password: string): Promise<BankUser>;
  getCurrentUser(): Promise<BankUser>;
  getUserById(id: string): Promise<BankUser | undefined>;
}
