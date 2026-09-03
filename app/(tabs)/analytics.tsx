import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const bars = [0.84, 0.77, 0.73, 0.69, 0.66, 0.63, 0.59, 0.55, 0.52, 0.47, 0.43, 0.39, 0.34, 0.28, 0.2, 0.12];

export default function AnalyticsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.content, { paddingTop: insets.top + 12, paddingBottom: 110 }]}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()} activeOpacity={0.8}>
          <Ionicons name="chevron-back" color="#B9B9BE" size={18} />
        </TouchableOpacity>

        <Text style={styles.title}><Text style={styles.titleStrong}>Smart </Text>Analytics</Text>

        <View style={styles.overviewCard}>
          <Text style={styles.cardEyebrow}>Spending Overview</Text>
          <Text style={styles.amount}>$24.8k</Text>
          <View style={styles.barChart}>
            {bars.map((value, index) => (
              <View
                key={index}
                style={[
                  styles.bar,
                  { height: 12 + value * 34 },
                  index > 11 && styles.barMuted,
                ]}
              />
            ))}
          </View>

          <View style={styles.categoriesRow}>
            {[
              ['Essentials', 0.69],
              ['Lifestyle', 0.48],
              ['Fees', 0.28],
            ].map(([label, progress]) => (
              <View key={String(label)} style={styles.categoryItem}>
                <MiniGauge progress={Number(progress)} />
                <Text style={styles.categoryValue}>11/77%</Text>
                <Text style={styles.categoryLabel}>{label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.gridRow}>
          <View style={[styles.smallCard, styles.gridCard]}>
            <Text style={styles.cardEyebrow}>Payment Sources</Text>
            <View style={styles.sourceChart}>
              {[0.45, 0.34, 0.82, 0.28].map((value, index) => (
                <View key={index} style={styles.sourceItem}>
                  {index === 2 && <View style={styles.tooltip}><Text style={styles.tooltipText}>1.3k</Text></View>}
                  <View style={[styles.sourceBar, { height: 54 * value }, index === 2 && styles.sourceBarActive]} />
                  <Text style={styles.sourceLabel}>{['Card', 'Bank', 'Wallet', 'Other'][index]}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={[styles.smallCard, styles.gridCard]}>
            <Text style={styles.cardEyebrow}>AI Score</Text>
            <View style={styles.scoreWrap}>
              <ScoreGauge score={67} />
            </View>
          </View>
        </View>

        <View style={styles.gridRow}>
          <View style={[styles.placeholderCard, styles.gridCard]}>
            <Text style={styles.cardEyebrow}>AI Usage</Text>
            <View style={styles.miniLines}>
              <View style={styles.miniLine} />
              <View style={[styles.miniLine, { width: '72%' }]} />
              <View style={[styles.miniLine, { width: '48%' }]} />
            </View>
          </View>
          <View style={[styles.placeholderCard, styles.gridCard]}>
            <Text style={styles.cardEyebrow}>Wallet Activity</Text>
            <View style={styles.activityDots}>
              {[1, 2, 3, 4, 5, 6].map((dot) => <View key={dot} style={styles.activityDot} />)}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function MiniGauge({ progress }: { progress: number }) {
  const radius = 19;
  const circumference = 2 * Math.PI * radius;
  const dash = circumference * progress;

  return (
    <Svg width={46} height={31} viewBox="0 0 46 31">
      <Circle cx="23" cy="23" r={radius} stroke="#303034" strokeWidth="4" fill="none" strokeDasharray={`${circumference * 0.58} ${circumference}`} strokeLinecap="round" transform="rotate(145 23 23)" />
      <Circle cx="23" cy="23" r={radius} stroke="#9D4CFF" strokeWidth="4" fill="none" strokeDasharray={`${dash * 0.58} ${circumference}`} strokeLinecap="round" transform="rotate(145 23 23)" />
    </Svg>
  );
}

function ScoreGauge({ score }: { score: number }) {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const portion = circumference * 0.72;
  const filled = portion * (score / 100);

  return (
    <View style={styles.scoreGaugeWrap}>
      <Svg width={92} height={74} viewBox="0 0 92 74">
        <Circle cx="46" cy="48" r={radius} stroke="#343438" strokeWidth="9" fill="none" strokeDasharray={`${portion} ${circumference}`} strokeLinecap="round" transform="rotate(140 46 48)" />
        <Circle cx="46" cy="48" r={radius} stroke="#A04CFF" strokeWidth="9" fill="none" strokeDasharray={`${filled} ${circumference}`} strokeLinecap="round" transform="rotate(140 46 48)" />
      </Svg>
      <Text style={styles.scoreText}>{score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#050505',
  },
  content: {
    paddingHorizontal: 22,
  },
  backButton: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#151517',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    color: '#37373B',
    letterSpacing: -0.7,
    marginBottom: 14,
    fontWeight: '300',
  },
  titleStrong: {
    color: '#F7F7F8',
    fontWeight: '400',
  },
  overviewCard: {
    borderRadius: 18,
    backgroundColor: '#111113',
    padding: 14,
    borderWidth: 1,
    borderColor: '#1D1D20',
    marginBottom: 10,
  },
  cardEyebrow: {
    color: '#D5D5D9',
    fontSize: 10,
    marginBottom: 9,
  },
  amount: {
    color: '#D9D9DD',
    fontSize: 22,
    fontWeight: '500',
    letterSpacing: -0.5,
  },
  barChart: {
    height: 57,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 3,
  },
  bar: {
    flex: 1,
    maxWidth: 7,
    minWidth: 4,
    borderRadius: 3,
    backgroundColor: '#984BFF',
  },
  barMuted: {
    backgroundColor: '#2B2B2F',
  },
  categoriesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 13,
  },
  categoryItem: {
    width: '31%',
    alignItems: 'center',
  },
  categoryValue: {
    color: '#A1A1A6',
    fontSize: 7,
    marginTop: -12,
    marginBottom: 7,
  },
  categoryLabel: {
    color: '#E8E8EB',
    fontSize: 8,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  gridCard: {
    flex: 1,
  },
  smallCard: {
    minHeight: 132,
    borderRadius: 17,
    backgroundColor: '#111113',
    padding: 12,
    borderWidth: 1,
    borderColor: '#1D1D20',
  },
  sourceChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 90,
    paddingTop: 18,
  },
  sourceItem: {
    flex: 1,
    height: 70,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sourceBar: {
    width: 18,
    borderRadius: 4,
    backgroundColor: '#414146',
  },
  sourceBarActive: {
    backgroundColor: '#9C4BFF',
    shadowColor: '#9C4BFF',
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },
  sourceLabel: {
    color: '#67676D',
    fontSize: 6,
    marginTop: 6,
  },
  tooltip: {
    position: 'absolute',
    top: 0,
    backgroundColor: '#050505',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    zIndex: 2,
  },
  tooltipText: {
    color: '#FFFFFF',
    fontSize: 6,
  },
  scoreWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreGaugeWrap: {
    width: 92,
    height: 74,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    position: 'absolute',
    color: '#F4F4F6',
    fontSize: 27,
    fontWeight: '500',
    top: 31,
  },
  placeholderCard: {
    minHeight: 96,
    borderRadius: 17,
    backgroundColor: '#0F0F11',
    padding: 12,
    borderWidth: 1,
    borderColor: '#1A1A1D',
  },
  miniLines: {
    gap: 7,
    marginTop: 7,
  },
  miniLine: {
    height: 7,
    width: '90%',
    borderRadius: 4,
    backgroundColor: '#2D2D31',
  },
  activityDots: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
    marginTop: 12,
  },
  activityDot: {
    width: 17,
    height: 17,
    borderRadius: 5,
    backgroundColor: '#2E2E32',
  },
});
