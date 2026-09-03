import { Tabs } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { BottomNav } from '@/presentation/components/BottomNav';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.hidden,
        sceneStyle: styles.scene,
      }}
      tabBar={(props) => (
        <View pointerEvents="box-none" style={styles.navWrap}>
          <BottomNav {...props} />
        </View>
      )}
    >
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="analytics" options={{ title: 'Analytics' }} />
      <Tabs.Screen name="transfer" options={{ title: 'Transfer' }} />
      <Tabs.Screen name="activity" options={{ title: 'Activity' }} />
      <Tabs.Screen name="cards" options={{ title: 'Cards' }} />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },
  scene: {
    backgroundColor: '#050505',
  },
  navWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 16,
    alignItems: 'center',
  },
});
