import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import MyKeyboard from "../src/components/MyButtons";
import { ThemeContext } from "../src/context/ThemeContext";
import { myColors } from "../src/styles/Colors";
import { useState } from "react";
import MyChat from "../src/components/MyChat";
import MyVideo from "../src/components/MyVideo"
import { Styles } from "../src/styles/GlobalStyles";


const VideoScreen = () => {

    const navigation = useNavigation();
    return (

      <SafeAreaView>
       <MyVideo />
       
    </SafeAreaView>
   



    );
}



export default VideoScreen;

