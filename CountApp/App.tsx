import React from 'react';
import { View, Text, Button } from 'react-native';

function App() {

  const handlePress = () => {
    console.log("Button pressed");
  };

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:20}}>Hello React Native 🚀</Text>
      <Button title="Press me" onPress={handlePress}/>
    </View>
  );
}

export default App;