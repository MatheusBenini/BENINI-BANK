export type TransactionKind = 'income' | 'expense' | 'exchange';

export type Transaction = {
  id: string;
  title: string;
  subtitle: string;
  amount: number;
  currency: string;
  secondaryAmount?: string;
  kind: TransactionKind;
  icon: 'exchange' | 'person' | 'spotify' | 'card';
};

export type Person = {
  id: string;
  name: string;
  initials: string;
  tone: 'light' | 'mid' | 'dark';
};

export type BankUser = {
  id: string;
  firstName: string;
  fullName: string;
  document: string;
  email: string;
  password: string;
  balance: number;
  avatarInitials: string;
  people: Person[];
  transactions: Transaction[];
};
