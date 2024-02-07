import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabMainRoutes } from "./tab.main.routes";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="TabMain" 
        component={TabMainRoutes}
      />
      
    </Stack.Navigator>
  )
}