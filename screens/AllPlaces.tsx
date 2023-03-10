import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import PlacesList from "components/places/PlacesList";
import { IPlace } from "types/place";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "utils/database";

const AllPlaces = () => {
  const [loadedPlaces, setLoadedPlaces] = useState<any>([]);

  const isFocused = useIsFocused();
  useEffect(() => {
    const loadPlaces = async () => {
      const places = await fetchPlaces();
      setLoadedPlaces(places);
    };

    if (isFocused) {
      loadPlaces();
    }
  }, [isFocused]);
  return <PlacesList places={loadedPlaces} />;
};

export default AllPlaces;

const styles = StyleSheet.create({});
