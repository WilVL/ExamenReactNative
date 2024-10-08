// components/MyChat.js
import React, { useContext } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { ThemeContext } from "../context/ThemeContext";

export default function MyChat() {
  const theme  = useContext(ThemeContext);
  const [messages, setMessages] = React.useState([
    { id: 1, sender: 'User 1', title: 'Capítulo 1: Miedo', text: 'Texto de ejempploooooo,Texto de ejempploooooo,Texto de ejempploooooo,Texto de ejempploooooo,Texto de ejempploooooo,Texto de ejempploooooo,' },
    { id: 2, sender: 'User 1', image: 'https://boszart.eu/wp-content/uploads/2014/02/131-Zdzislaw-Beksinski-obraz-600x716.jpg' },
    { id: 3, sender: 'User 2', image: 'https://i.pinimg.com/736x/2a/a0/4b/2aa04be255d5d5dbd9b67e08c259bc04.jpg' },
    { id: 4, sender: 'User 2', title: 'Capítulo 2: Oscuridad', text: 'Texto de ejemploo, Texto de ejempploooooo, Texto de ejempploooooo,Texto de ejempploooooo,Texto de ejempploooooo,Texto de ejempploooooo,Texto de ejempploooooo,Texto de ejempploooooo,Texto de ejempploooooo,' },
    { id: 5, sender: 'User 1', title: 'Capítulo 3: Fin', text: 'Esto es un texto de ejemplo. Esto es un texto de ejemplo. ' },
    { id: 6, sender: 'User 2', image: 'https://i0.wp.com/beksstore.com/wp-content/uploads/2019/10/1982-61x73-AA_popr_low_res_rama.jpg?ssl=1' },
    { id: 7, sender: 'User 2', title: 'Un desierto de otro Mundo', text: 'Esto es lo que se puede encontrar' },
 
  ]);

  return (
    <ScrollView style={theme === 'light' ? Styles.chatContainer : Styles.chatContainerDark}>
      {messages.map((message) => (
        <View
          key={message.id}
          style={message.sender === 'User 1'
            ? (theme === 'light' ? Styles.messageUser1 : Styles.messageUser1Dark)
            : (theme === 'light' ? Styles.messageUser2 : Styles.messageUser2Dark)
          }
        >
   
          {message.title && (
            <Text style={theme === 'light' ? [Styles.messageText, { fontWeight: 'bold', fontSize: 18 }] : [Styles.messageTextDark, { fontWeight: 'bold', fontSize: 18 }]}>
              {message.title}
            </Text>
          )}

          {message.text && (
            <Text style={theme === 'light' ? Styles.messageText : Styles.messageTextDark}>
              {message.text}
            </Text>
          )}

 
          {message.image && (
            <Image
              source={{ uri: message.image }}
              style={Styles.messageImage}
              resizeMode="cover"
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
}
