import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList, RootStackParamListRoute } from "types/navigation";

import React from "react";
import IconButton from "components/UI/IconButton";
import { Colors } from "constants/colors";
import AllPlaces from "screens/AllPlaces";
import AddPlace from "screens/AddPlace";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const NativeNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary500 },
          headerTintColor: Colors.gray700,
          contentStyle: { backgroundColor: Colors.gray700 },
        }}
      >
        <Stack.Screen
          name="AllPlaces"
          component={AllPlaces}
          options={({ navigation }: RootStackParamListRoute) => ({
            title: "Your favorite places",
            headerRight: ({ tintColor }) => (
              <IconButton
                color={tintColor}
                size={24}
                iconName="add"
                onPress={() => navigation.navigate("AddPlace")}
              />
            ),
          })}
        />
        <Stack.Screen
          name="AddPlace"
          component={AddPlace}
          options={{
            title: "Add a new Place",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
