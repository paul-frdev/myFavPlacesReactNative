import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, View, Alert, Image, Text } from "react-native";
import { Colors } from "constants/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { getMapPreview } from "utils/location";

import { useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParams, RouteProps } from "types/navigation";

import OutlinedButton from "components/UI/OutlinedButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ILocation } from "types/place";

interface LocationPickerProps {
  onPickLocation: (data: ILocation) => void;
}
const LocationPicker = ({ onPickLocation }: LocationPickerProps) => {
  const [pickedLocation, setPickedLocation] = useState<any>();

  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const route = useRoute<RouteProps>();
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const mapPickedLocation = useMemo(() => {
    return (
      route.params && {
        lat: route.params.pickedLat,
        lng: route.params.pickedLng,
      }
    );
  }, [route.params]);

  useEffect(() => {
    if (mapPickedLocation) {
      setPickedLocation(mapPickedLocation);
    }
  }, [mapPickedLocation]);

  useEffect(() => {
    onPickLocation(pickedLocation);
  }, [onPickLocation, pickedLocation]);

  const verifyPermissions = async () => {
    if (
      locationPermissionInformation?.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation?.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions!",
        "You need to grand camera permissions to use this app"
      );

      return false;
    }

    return true;
  };
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const pickOnMapHandler = () => {
    navigate("Map");
  };

  let locationPreview = <Text>No location picked yet</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.mapPreviewImage}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
        }}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: Colors.primary100,
    borderRadius: 7,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 30,
  },
  mapPreviewImage: {
    width: "100%",
    height: "100%",
  },
});
