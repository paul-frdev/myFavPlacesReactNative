import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamListRoute, RootStackParams } from "types/navigation";
import { Colors } from "constants/colors";

import IconButton from "components/UI/IconButton";
import AllPlaces from "screens/AllPlaces";
import AddPlace from "screens/AddPlace";
import Map from "screens/Map";
import PlaceDetails from "screens/PlaceDetails";

const Stack = createNativeStackNavigator<RootStackParams>();

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
        <Stack.Screen
          name="Map"
          component={Map}
          options={{
            title: "Your map",
          }}
        />
        <Stack.Screen
          name="PlaceDetails"
          component={PlaceDetails}
          options={{
            title: "Loading place...",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
