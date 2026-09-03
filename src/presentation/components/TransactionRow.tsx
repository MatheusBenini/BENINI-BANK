import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Transaction } from '@/domain/entities/bank';

type Props = { transaction: Transaction };

const iconByType: Record<Transaction['icon'], keyof typeof Ionicons.glyphMap> = {
  exchange: 'swap-horizontal',
  person: 'person',
  spotify: 'logo-spotify',
  card: 'card-outline',
};

const transactionImageById: Record<string, any> = {
  t2: require('../../../assets/avatars/savannah.png'),
};

export function TransactionRow({ transaction }: Props) {
  const positive = transaction.kind === 'income';
  const currencySymbol = transaction.currency === 'EUR' ? '€' : transaction.currency === 'GBP' ? '£' : '$';
  const amountText = `${positive ? '+' : '-'}${currencySymbol}${transaction.amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <View style={styles.iconCircle}>
          {transactionImageById[transaction.id] ? (
            <Image source={transactionImageById[transaction.id]} style={styles.transactionImage} />
          ) : (
            <Ionicons name={iconByType[transaction.icon]} size={19} color="#D3D3D6" />
          )}
        </View>
        <View>
          <Text style={styles.title}>{transaction.title}</Text>
          <Text style={styles.subtitle}>{transaction.subtitle}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={[styles.amount, positive ? styles.positive : styles.negative]}>{amountText}</Text>
        {!!transaction.secondaryAmount && <Text style={styles.secondary}>{transaction.secondaryAmount}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    minHeight: 66,
    borderRadius: 16,
    backgroundColor: '#121214',
    marginBottom: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#1D1D20',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#28282B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionImage: {
    width: '100%',
    height: '100%',
    borderRadius: 19,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 3,
  },
  subtitle: {
    color: '#77777C',
    fontSize: 10,
  },
  right: {
    alignItems: 'flex-end',
    marginLeft: 8,
  },
  amount: {
    fontSize: 13,
    fontWeight: '600',
  },
  positive: {
    color: '#22E57A',
  },
  negative: {
    color: '#F55561',
  },
  secondary: {
    color: '#85858A',
    fontSize: 9,
    marginTop: 4,
  },
});
