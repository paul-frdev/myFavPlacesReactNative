import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useCallback, useState } from "react";
import { Colors } from "constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "components/UI/Button";
import { ILocation, IPlace } from "types/place";
import Place from "models/place";

interface PlaceFormProps {
  onCreatePlace: (data: IPlace) => void;
}
const PlaceForm = ({ onCreatePlace }: PlaceFormProps) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [pickedLocation, setPickedLocation] = useState<any>({
    lat: null,
    lng: null,
  });
  const [pickedAddress, setPickedAddress] = useState("some address");

  const changeTitleHandler = (enteredValue: string) => {
    setEnteredTitle(enteredValue);
  };

  const takeImageHandler = (imageUri: any) => setSelectedImage(imageUri);

  const pickLocationHandler = useCallback((location: ILocation) => {
    setPickedLocation({ lat: location?.lat, lng: location?.lng });
  }, []);

  const savePlaceHandler = () => {
    const placeItem: IPlace = {
      title: enteredTitle,
      imageUri: selectedImage,
      location: pickedLocation,
      address: pickedAddress,
    };
    const placeData = new Place(placeItem);
    onCreatePlace(placeData);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Submit</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "700",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
