import { StyleSheet } from "react-native";
import { myColors } from "./Colors"; 

export const Styles = StyleSheet.create({
    // Chat styles
    chatContainer: {
        padding: 10,
        backgroundColor: myColors.light,
        flex: 1,
    },
    chatContainerDark: {
        padding: 10,
        backgroundColor: myColors.dark,
        flex: 1,
    },
    messageUser1: {
        backgroundColor: myColors.blue,
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignSelf: "flex-start",
        maxWidth: "70%",
    },
    messageUser1Dark: {
        backgroundColor: myColors.result,
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignSelf: "flex-start",
        maxWidth: "70%",
    },
    messageUser2: {
        backgroundColor: myColors.gray,
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignSelf: "flex-end",
        maxWidth: "70%",
    },
    messageUser2Dark: {
        backgroundColor: myColors.btnGray,
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        alignSelf: "flex-end",
        maxWidth: "70%",
    },
    messageText: {
        color: myColors.white,
        fontSize: 16,
    },
    messageTextDark: {
        color: myColors.black,
        fontSize: 16,
    },
    // Button
    btnBlue: {
        width: 120,
        height: 90,
        borderRadius: 24,
        backgroundColor: myColors.blue,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnDark: {
        width: 120,
        height: 90,
        borderRadius: 24,
        backgroundColor: myColors.btnDark,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnLight: {
        width: 120,
        height: 90,
        borderRadius: 24,
        backgroundColor: myColors.white,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    btnGray: {
        width: 120,
        height: 90,
        borderRadius: 24,
        backgroundColor: myColors.btnGray,
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
    },
    smallTextLight: {
        fontSize: 32,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 32,
        color: myColors.black,
    },
    // Keyboard
    row: {
        maxWidth: '100%',
        flexDirection: "row",
    },
    viewBottom: {
        position: 'absolute',
        bottom: 50,
    },
    screenFirstNumber: {
        fontSize: 96,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.gray,
        fontWeight: '200',
        alignSelf: "flex-end",
    },

      // Otros estilos...
  messageImage: {
    width: 300,   
    height: 200,
    borderRadius: 10,
    marginTop: 5,
  },


  //Video
  messageImagex: {
    width: '600%',   
    height: 900,     
    borderRadius: 10,
    marginTop: 1,
},
container: {
    flex: 1, 
    padding: 30,
    //justifyContent: 'center', 
    //alignItems: 'center', 
    backgroundColor: '#f5f5f5', 
    marginBottom: 2100,
  },
  box: {
    width: '600%',   
    height: 1900,     
    borderRadius: 110,
    marginTop: 3,
   // alignItems: 'center', 
    //justifyContent: 'center', 
  },


})