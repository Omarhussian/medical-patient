import { Tabs } from "expo-router";
import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require("../../assets/images/home-2.png")}
                style={[
                  styles.icon,
                  // { tintColor: focused ? Colors[colorScheme].tint : color },
                ]}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
            <Image
              source={require("../../assets/images/profile-circle.png")}
              style={[
                styles.icon,
                // { tintColor: focused ? Colors[colorScheme].tint : color },
              ]}
            />
          </View>
          ),
        }}
      />
      <Tabs.Screen
        name="More"
        options={{
          title: "More",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.iconContainer}>
            <Image
              source={require("../../assets/images/more.png")}
              style={[
                styles.icon,
                // { tintColor: focused ? Colors[colorScheme].tint : color },
              ]}
            />
          </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
