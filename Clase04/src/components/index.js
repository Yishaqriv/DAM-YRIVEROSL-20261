import React from "react";
import { View, Text } from "react-native";
import { styles } from "../app.style";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo 👋</Text>
      <Text style={styles.subtitle}>
        Estoy usando themes y styles correctamente 🎨
      </Text>
    </View>
  );
};

export default Home;
