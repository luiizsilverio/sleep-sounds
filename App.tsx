import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { 
  useFonts, 
  Nunito_400Regular, 
  Nunito_500Medium, 
  Nunito_600SemiBold, 
  Nunito_700Bold 
} from '@expo-google-fonts/nunito';

import { theme } from './src/theme';
import { Routes } from './src/routes';

function MyLoading() {
  return (
    <View style={{"flex": 1, "alignItems": "center", "justifyContent": "center" }}>
      <ActivityIndicator size="large" color="#000001" />
    </View>
  )
}

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Nunito_400Regular,
    Nunito_500Medium,
    Nunito_600SemiBold,
    Nunito_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return <MyLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
