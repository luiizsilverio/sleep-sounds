import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../pages/Login";

const Stack = createNativeStackNavigator();

export function PublicRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Login" 
        component={Login}
      />
      
    </Stack.Navigator>
  )
}