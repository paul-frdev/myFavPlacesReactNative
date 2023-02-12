import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import OutlinedButton from "components/UI/OutlinedButton";
import { Colors } from "constants/colors";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PlaceDetailsRouteProps, RootStackParams } from "types/navigation";
import { fetchPlaceDetails } from "utils/database";
import { IPlace } from "types/place";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const PlaceDetails = () => {
  const [fetchPlace, setFetchPlace] = useState<IPlace>();
  const route = useRoute<PlaceDetailsRouteProps>();
  const { setOptions, navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const selectedPlaceId = route.params?.placeId;

  useEffect(() => {
    async function loadPlaceDetails() {
      const place = await fetchPlaceDetails(selectedPlaceId!);
      setFetchPlace(place as IPlace);
    }

    loadPlaceDetails();
  }, [selectedPlaceId]);
  const showOnMapHandler = () => {
    navigate("Map", {
      initialLat: fetchPlace?.location.lat,
      initialLng: fetchPlace?.location.lng,
    });
  };

  if (!fetchPlace) {
    return (
      <View style={styles.fallback}>
        <Text>Loading place data...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: fetchPlace?.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{fetchPlace?.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  fallback: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});
