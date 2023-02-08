import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import PlacesList from "components/places/PlacesList";
import { IPlace } from "types/place";
import { RootStackParamListRoute } from "types/navigation";
import { useIsFocused } from "@react-navigation/native";

const AllPlaces = ({ route }: RootStackParamListRoute) => {
  const [loadedPlaces, setLoadedPlaces] = useState<IPlace[]>([]);
  const isFocused = useIsFocused();

  console.log(loadedPlaces);
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadedPlaces((currentPlaces: any) => [
        ...currentPlaces,
        route.params.place,
      ]);
    }
  }, [isFocused, route.params]);
  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;

const styles = StyleSheet.create({});
