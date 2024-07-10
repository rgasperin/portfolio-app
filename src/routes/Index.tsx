import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { ButtonTabsRoutes } from "./botton-tabs.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <ButtonTabsRoutes />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
