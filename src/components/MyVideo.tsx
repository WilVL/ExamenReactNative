import * as React from "react";
import { View, Text } from "react-native";
import { Video } from 'expo-av'; 
import { Styles } from "../styles/GlobalStyles"; 

export default function MyVideo() {
  return (


    
    <View style={Styles.container}>
  
      <Video
        source={require('../../assets/LogoShadowWEB.webm')} 

        style={Styles.box} 
        resizeMode= 'cover' 
        shouldPlay
        isLooping
      />
    </View>
  );

  
}


