import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native-web";
import { useNavigation } from "@react-navigation/native";
import MyButtons from "../src/components/MyButtons";
import { ThemeContext } from "../src/context/ThemeContext";
import { myColors } from "../src/styles/Colors";
import { useState } from "react";

const BotonesScreen = () => {
    const [theme, setTheme] = useState('light');
    const navigation = useNavigation();
    return (
        <ThemeContext.Provider value={theme}>
        <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
          <Switch
            value={theme === 'dark'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
          <MyButtons />
        </SafeAreaView>
      </ThemeContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: myColors.light,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });

export default BotonesScreen;

