import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import { HomeScreen } from "../screens/Home/Index";
import { SkillScreen } from "../screens/Skills/Index";

const { Screen, Navigator } = createBottomTabNavigator();

export function ButtonTabsRoutes() {
  return (
    <Navigator>
      <Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <FontAwesome name="home" color="black" size={24} />
        }}
      />
      <Screen
        name="skill"
        component={SkillScreen}
        options={{
          title: "Minhas Skills",
          tabBarIcon: ({ color, size }) => <FontAwesome name="trophy" color="black" size={24} />
        }}
      />
    </Navigator>
  );
}
