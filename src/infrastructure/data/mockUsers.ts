import { BankUser } from '@/domain/entities/bank';

export const mockUsers: BankUser[] = [
  {
    id: 'user-01',
    firstName: 'Sriraj',
    fullName: 'Sriraj Mohan',
    document: '000.000.000-01',
    email: 'sriraj@aura.local',
    password: '123456',
    balance: 227169.85,
    avatarInitials: 'SM',
    people: [
      { id: 'p1', name: 'Theresa', initials: 'TH', tone: 'light' },
      { id: 'p2', name: 'Gladys', initials: 'GL', tone: 'mid' },
      { id: 'p3', name: 'Jane', initials: 'JA', tone: 'light' },
      { id: 'p4', name: 'Darlene', initials: 'DA', tone: 'dark' },
    ],
    transactions: [
      { id: 't1', title: 'USD → EUR', subtitle: 'Jun 10, 15:02', amount: 240, currency: 'EUR', secondaryAmount: '€8,240.90 EUR', kind: 'income', icon: 'exchange' },
      { id: 't2', title: 'Savannah', subtitle: 'Jun 09, 18:24', amount: 2450, currency: 'USD', secondaryAmount: '$8,480.90 USD', kind: 'income', icon: 'person' },
      { id: 't3', title: 'Spotify Premium', subtitle: 'Jun 08, 11:47', amount: 9.99, currency: 'USD', secondaryAmount: '$6,030.45 USD', kind: 'expense', icon: 'spotify' }
    ]
  },
  {
    id: 'user-02',
    firstName: 'Maya',
    fullName: 'Maya Torres',
    document: '000.000.000-02',
    email: 'maya@aura.local',
    password: '123456',
    balance: 98234.48,
    avatarInitials: 'MT',
    people: [
      { id: 'p5', name: 'Noah', initials: 'NO', tone: 'mid' },
      { id: 'p6', name: 'Olivia', initials: 'OL', tone: 'light' },
      { id: 'p7', name: 'Ethan', initials: 'ET', tone: 'dark' },
      { id: 'p8', name: 'Ava', initials: 'AV', tone: 'light' },
    ],
    transactions: [
      { id: 't4', title: 'Freelance', subtitle: 'Jun 10, 09:15', amount: 1200, currency: 'USD', kind: 'income', icon: 'person' },
      { id: 't5', title: 'Cloud Storage', subtitle: 'Jun 09, 20:12', amount: 12.5, currency: 'USD', kind: 'expense', icon: 'card' },
      { id: 't6', title: 'USD → GBP', subtitle: 'Jun 08, 14:07', amount: 360, currency: 'GBP', kind: 'exchange', icon: 'exchange' }
    ]
  }
];
