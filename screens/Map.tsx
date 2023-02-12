import { Alert, StyleSheet } from "react-native";
import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import MapView, { MapPressEvent, Marker } from "react-native-maps";
import { MapRouteProps, RootStackParams } from "types/navigation";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import IconButton from "components/UI/IconButton";

const Map = () => {
  const route = useRoute<MapRouteProps>();
  const { navigate, setOptions } =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const initialLocation = useMemo(() => {
    return (
      route.params && {
        lat: route.params.initialLat,
        lng: route.params.initialLng,
      }
    );
  }, [route.params]);

  const [selectedLocation, setSelectedLocation] =
    useState<any>(initialLocation);

  const region = {
    latitude: initialLocation ? initialLocation.lat : 37.78,
    longitude: initialLocation ? initialLocation.lng : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const selectLocationHandler = (event: MapPressEvent) => {
    if (initialLocation) {
      return;
    }
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;

    setSelectedLocation({ lat, lng });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No Location Picked",
        "You have to pick a location by tapping on the map first"
      );
      return;
    }

    navigate("AddPlace", {
      pickedLat: selectedLocation?.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigate, selectedLocation]);

  useLayoutEffect(() => {
    if (initialLocation) {
      return;
    }
    setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          iconName="save"
          size={24}
          color={tintColor}
          onPress={savePickedLocationHandler}
        />
      ),
    });
  }, [initialLocation, savePickedLocationHandler, setOptions]);

  return (
    <MapView
      style={styles.map}
      onPress={selectLocationHandler}
      initialRegion={region}
    >
      {selectedLocation && (
        <Marker
          title="Picked location"
          coordinate={{
            latitude: selectedLocation?.lat,
            longitude: selectedLocation?.lng,
          }}
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
