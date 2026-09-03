import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const routes = [
  { name: 'home', icon: 'home' as const },
  { name: 'transfer', icon: 'swap-horizontal' as const },
  { name: 'home', icon: 'sparkles' as const, center: true },
  { name: 'analytics', icon: 'pulse' as const },
  { name: 'cards', icon: 'card-outline' as const },
];

export function BottomNav({ navigation, state }: BottomTabBarProps) {
  return (
    <View style={styles.shell}>
      {routes.map((route, index) => {
        const activeRoute = state.routes[state.index]?.name;
        const active = route.center ? activeRoute === 'home' : activeRoute === route.name;

        if (route.center) {
          return (
            <TouchableOpacity key={`center-${index}`} activeOpacity={0.85} onPress={() => navigation.navigate('home')}>
              <LinearGradient colors={['#B787FF', '#7A35F5']} style={styles.centerButton}>
                <Ionicons name={route.icon} size={25} color="#FFFFFF" />
              </LinearGradient>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            key={`${route.name}-${index}`}
            activeOpacity={0.8}
            onPress={() => navigation.navigate(route.name)}
            style={[styles.navButton, active && styles.navButtonActive]}
          >
            <Ionicons name={route.icon} size={22} color={active ? '#FFFFFF' : '#929292'} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  shell: {
    width: 278,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#2A2A2D',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.42,
    shadowRadius: 18,
    elevation: 16,
  },
  navButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonActive: {
    backgroundColor: '#3A3A3D',
  },
  centerButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#9D5CFF',
    shadowOpacity: 0.5,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 4 },
    elevation: 8,
  },
});
