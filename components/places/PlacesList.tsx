import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IPlace } from "types/place";
import PlaceItem from "./PlaceItem";
import { Colors } from "constants/colors";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "types/navigation";

interface PlacesListProps {
  places?: IPlace[];
}
const PlacesList = ({ places }: PlacesListProps) => {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleSelect = (id: number) => {
    navigate("PlaceDetails", { placeId: id });
  };

  if (!places || places.length <= 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No places added yet - start adding some!
        </Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.list}
      data={places}
      keyExtractor={(item: IPlace) => item?.id as unknown as string}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={handleSelect} />
      )}
    />
  );
};

export default PlacesList;

const styles = StyleSheet.create({
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
