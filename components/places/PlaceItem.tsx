import { Image, StyleSheet, Text, Pressable } from "react-native";
import React from "react";
import { IPlace } from "types/place";

interface PlaceItem {
  place: IPlace;
  onSelect: () => void;
}
const PlaceItem = ({ place, onSelect }: PlaceItem) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUrl }} />
      <Text>{place.title}</Text>
      <Text>{place.address}</Text>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
