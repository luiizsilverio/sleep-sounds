import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabMainRoutes } from "./tab.main.routes";
import PlaylistDetail from "../pages/PlaylistDetail";

const Stack = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="TabMain" 
        component={TabMainRoutes}
      />
      <Stack.Screen
        name="PlaylistDetail" 
        component={PlaylistDetail}
      />
      
    </Stack.Navigator>
  )
}