import {
    DarkTheme,
    DefaultTheme,
    ThemeProvider,
  } from "@react-navigation/native";
  import { useFonts } from "expo-font";
  import { Stack } from "expo-router";
  import "react-native-reanimated";
  
  import { useColorScheme } from "@/hooks/useColorScheme";
  
  export default function RootLayout() {
  
    const colorScheme = useColorScheme();
  
    const [loaded] = useFonts({
        SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
    });
  
    if (!loaded) {
        return null;
    }
  
    return (
        <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
            <Stack screenOptions={{
                headerShown: true,
            }}>
                <Stack.Screen name="index" options={{ headerShown: true, headerTitle: 'Pharmacies' }} />
                <Stack.Screen name="PharmacyDetails" options={{ headerShown: true, headerTitle: 'Pharmacy Details' }} />
            </Stack>
        </ThemeProvider>
    );
  }