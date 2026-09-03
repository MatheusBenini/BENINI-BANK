import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActionButton } from '@/presentation/components/ActionButton';
import { TransactionRow } from '@/presentation/components/TransactionRow';
import { useCurrentUser } from '@/presentation/hooks/useCurrentUser';


const personAvatarById: Record<string, any> = {
  p1: require('../../assets/avatars/theresa.png'),
  p2: require('../../assets/avatars/gladys.png'),
  p3: require('../../assets/avatars/jane.png'),
  p4: require('../../assets/avatars/darlene.png'),
};

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const { user } = useCurrentUser();

  if (!user) {
    return <View style={styles.loading} />;
  }

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingTop: insets.top + 10, paddingBottom: 106 }]}
      >
        <LinearGradient
          colors={['#A178FF', '#7D35F0', '#8948E8', '#A78DE9']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.hero}
        >
          <View style={styles.heroTop}>
            <View style={styles.identityWrap}>
              <View style={styles.avatar}>
                <Image source={require('../../assets/avatars/top-profile.png')} style={styles.avatarImage} />
              </View>
              <View>
                <Text style={styles.greeting}>Good Morning.</Text>
                <Text style={styles.name}>{user.fullName}</Text>
              </View>
            </View>

            <View style={styles.headerActions}>
              <TouchableOpacity style={styles.circleButton} activeOpacity={0.8}>
                <Ionicons name="search-outline" size={18} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.circleButton} activeOpacity={0.8}>
                <Ionicons name="notifications-outline" size={18} color="#FFFFFF" />
                <View style={styles.notificationDot} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.balanceWrap}>
            <Text style={styles.balanceLabel}>Available Balance</Text>
            <View style={styles.balanceRow}>
              <Text style={styles.balance}>${user.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</Text>
              <Ionicons name="eye-off-outline" size={16} color="rgba(255,255,255,0.75)" />
            </View>
          </View>

          <View style={styles.actionsRow}>
            <ActionButton icon="add" label="Add" />
            <ActionButton icon="arrow-up" label="Send" />
            <ActionButton icon="arrow-down" label="Request" />
            <ActionButton icon="scan-outline" label="Scan" />
          </View>
        </LinearGradient>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>People</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.peopleList}>
          {user.people.map((person) => (
            <View key={person.id} style={styles.personItem}>
              <View style={[styles.personAvatar, person.tone === 'dark' && styles.personDark, person.tone === 'mid' && styles.personMid]}>
                {personAvatarById[person.id] ? (
                  <Image source={personAvatarById[person.id]} style={styles.personImage} />
                ) : (
                  <Text style={styles.personInitials}>{person.initials}</Text>
                )}
              </View>
              <Text style={styles.personName}>{person.name}</Text>
            </View>
          ))}

          <View style={styles.personItem}>
            <LinearGradient colors={['#9A51FF', '#7B2CF3']} style={styles.moreButton}>
              <Ionicons name="chevron-down" color="#FFFFFF" size={18} />
            </LinearGradient>
            <Text style={styles.personName}>More</Text>
          </View>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Transaction</Text>
          <TouchableOpacity><Text style={styles.seeAll}>See all</Text></TouchableOpacity>
        </View>

        <View>
          {user.transactions.map((transaction) => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#050505',
  },
  loading: {
    flex: 1,
    backgroundColor: '#050505',
  },
  content: {
    paddingHorizontal: 22,
  },
  hero: {
    borderRadius: 26,
    minHeight: 276,
    paddingHorizontal: 14,
    paddingTop: 16,
    paddingBottom: 12,
    overflow: 'hidden',
    shadowColor: '#6E31E6',
    shadowOpacity: 0.55,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 12 },
    elevation: 14,
  },
  heroTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  identityWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 39,
    height: 39,
    borderRadius: 20,
    backgroundColor: '#F1EBDD',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.9)',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  name: {
    color: 'rgba(255,255,255,0.68)',
    fontSize: 10,
    marginTop: 1,
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  circleButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(83,52,160,0.35)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },
  notificationDot: {
    position: 'absolute',
    right: 9,
    top: 8,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF5B61',
    borderWidth: 1,
    borderColor: '#8E60EA',
  },
  balanceWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 28,
    paddingBottom: 29,
  },
  balanceLabel: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 11,
    marginBottom: 4,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  balance: {
    color: '#FFFFFF',
    fontSize: 31,
    fontWeight: '700',
    letterSpacing: -1.1,
  },
  actionsRow: {
    flexDirection: 'row',
    gap: 4,
  },
  sectionHeader: {
    marginTop: 20,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  seeAll: {
    color: '#9D58FF',
    fontSize: 10,
    fontWeight: '600',
  },
  peopleList: {
    gap: 12,
    paddingRight: 12,
  },
  personItem: {
    width: 51,
    alignItems: 'center',
  },
  personAvatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#D5D5D7',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  personMid: {
    backgroundColor: '#8F8F93',
  },
  personDark: {
    backgroundColor: '#4E4E52',
  },
  personImage: {
    width: '100%',
    height: '100%',
  },
  personInitials: {
    color: '#121214',
    fontSize: 11,
    fontWeight: '700',
  },
  personName: {
    color: '#7C7C82',
    fontSize: 9,
    marginTop: 6,
  },
  moreButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
