import "./gesture-handler";
import "./global.css";
import Home from "./src/Screens/Home";
import GitDetail from "./src/Screens/GitDetail";
import Favourite from "./src/Screens/Favourite";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// TabNavigation
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarStyle: {
          height: 70,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          padding: 6,
        },
      }}
    >
      <Tab.Screen
        name="Search"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// StackNavigation
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Repository Details" component={GitDetail} />
    </Stack.Navigator>
  );
}

// main App
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
