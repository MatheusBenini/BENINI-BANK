import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  onPress?: () => void;
};

export function ActionButton({ icon, label, onPress }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.82} onPress={onPress} style={styles.button}>
      <View style={styles.iconWrap}>
        <Ionicons name={icon} size={21} color="#FFFFFF" />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    minWidth: 68,
    height: 66,
    borderRadius: 17,
    backgroundColor: 'rgba(87, 20, 215, 0.38)',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
  },
  iconWrap: {
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '500',
  },
});
