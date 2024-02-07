import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { useTheme } from "styled-components/native";
import { Discover } from "../pages/Discover";
import { Composer } from "../pages/Composer";
import { Profile } from "../pages/Profile";

const BottomTab = createBottomTabNavigator();

export function TabMainRoutes() {
  const theme = useTheme();

  return (
    <BottomTab.Navigator screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: theme.colors.system.primary,
      tabBarInactiveTintColor: theme.colors.gray,
      tabBarActiveBackgroundColor: theme.colors.background.secondary,
      tabBarStyle: {
        borderTopWidth: 0,
        backgroundColor: theme.colors.background.secondary
      }
    }}>
      <BottomTab.Screen
        name="Discover" 
        component={Discover}
        options={{
          title: 'Descubra',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='moon' color={color} size={22} />
          )
        }}
      />
      <BottomTab.Screen
        name="Composer" 
        component={Composer}
        options={{
          title: 'Compositor',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='musical-notes' color={color} size={22} />
          )
        }}
      />
      <BottomTab.Screen
        name="Profile" 
        component={Profile}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' color={color} size={22} />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}