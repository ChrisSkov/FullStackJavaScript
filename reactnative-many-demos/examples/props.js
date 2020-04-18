import React from 'react';
import { Text, View } from 'react-native';



export default function Cafe() {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
      <Cat name="Satan" />
    </View>
  );
}
function Cat(props) {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
}  