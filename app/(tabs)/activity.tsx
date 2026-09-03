import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function PlaceholderScreen() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.screen, { paddingTop: insets.top + 22 }]}>
      <View style={styles.iconWrap}><Ionicons name="sparkles" size={26} color="#9B50FF" /></View>
      <Text style={styles.title}>Screen ready for the next reference</Text>
      <Text style={styles.subtitle}>This tab keeps the new visual system and can be replaced when you send its screenshot.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#050505', paddingHorizontal: 24, alignItems: 'center', justifyContent: 'center' },
  iconWrap: { width: 58, height: 58, borderRadius: 29, backgroundColor: '#1B1229', alignItems: 'center', justifyContent: 'center', marginBottom: 18 },
  title: { color: '#FFFFFF', fontSize: 20, fontWeight: '600', textAlign: 'center' },
  subtitle: { color: '#77777D', fontSize: 12, lineHeight: 18, textAlign: 'center', marginTop: 8, maxWidth: 280 }
});
