import { useEffect, useState } from 'react';
import { BankUser } from '@/domain/entities/bank';
import { bankUseCases } from '@/infrastructure/container';

export function useCurrentUser() {
  const [user, setUser] = useState<BankUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    bankUseCases
      .getCurrentUser()
      .then((currentUser) => {
        if (mounted) setUser(currentUser);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { user, loading };
}
