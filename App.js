import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/MVC/Views/Tabs/Home";
import Analytics from "./src/MVC/Views/Tabs/Analytics";
import Settings from "./src/MVC/Views/Tabs/Settings";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "الصفحة الرئيسية") {
              iconName = "home";
            } else if (route.name === "الاحصائيات") {
              iconName = "bar-chart";
            } else if (route.name === "الاعدادات") {
              iconName = "cog";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="الصفحة الرئيسية" component={Home} />
        <Tab.Screen name="الاحصائيات" component={Analytics} />
        <Tab.Screen name="الاعدادات" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
