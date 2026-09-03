import { BankUser } from '@/domain/entities/bank';
import { BankRepository } from '@/domain/repositories/BankRepository';
import { mockUsers } from '@/infrastructure/data/mockUsers';

const wait = (ms = 220) => new Promise((resolve) => setTimeout(resolve, ms));

export class MockBankRepository implements BankRepository {
  async login(email: string, password: string): Promise<BankUser> {
    await wait();
    const user = mockUsers.find((item) => item.email === email && item.password === password);

    if (!user) {
      throw new Error('Credenciais inválidas');
    }

    return user;
  }

  async getCurrentUser(): Promise<BankUser> {
    await wait(120);
    return mockUsers[0];
  }

  async getUserById(id: string): Promise<BankUser | undefined> {
    await wait(120);
    return mockUsers.find((item) => item.id === id);
  }
}
