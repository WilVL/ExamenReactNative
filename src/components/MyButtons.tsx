import * as React from "react";
import Button from "./Button";
import { View, Text } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { myColors } from "../styles/Colors";

export default function MyButtons() {
  const [displayText, setDisplayText] = React.useState("");


  //Agregar palabras
  const handleWordPress = (word: string) => {
    setDisplayText(displayText + " " + word);  
  };

//LImpiar
  const clearText = () => {
    setDisplayText("");  
  };

  return (
    <View style={Styles.viewBottom}>
  
      <View
        style={{
          height: 20,
          width: "90%",
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 310,
          padding: 20,
        }}
      >
        <Text style={Styles.screenFirstNumber}>{displayText || "Presiona un botón"}</Text>
      </View>

      <View style={Styles.row}>
        <Button title="Hola" isBlue onPress={() => handleWordPress("Hola")} />
        <Button title="Boom!" isGray onPress={() => handleWordPress("No Explota")} />
        <Button title="Gracias" onPress={() => handleWordPress("Gracias")} />
        <Button title="Limpiar" isBlue onPress={clearText} /> 
      </View>
    </View>
  );
}


