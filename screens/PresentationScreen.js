import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
//import CheckBox from 'react-native-check-box'
import CheckBox from '@react-native-community/checkbox'

const PresentationScreen = () => {

  const route = useRoute();

  return (
    <View >
      <Text style={{ fontSize: 30, textAlign: "center", marginTop: 20, color: "black" }}>
        Final Details
      </Text>
      <View>
        <Text style={Styles.text}>
          Email Id :{route.params.email}
        </Text>
        <Text style={Styles.text}>
          Name :{route.params.name}
        </Text>
        <Text style={Styles.text}>
          Mobile No :{route.params.Mobileno}
        </Text>
        
        <Text style={Styles.text}>

        <CheckBox 
          value={route.params.checked}
        />
          <Text style={{ flexDirection: "row"}}>This is member</Text>
        </Text>

      </View>
    </View>
  )

}
const Styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    marginTop: 50,
    marginHorizontal: 30,

  },

  text: {
    fontSize: 20,
    marginTop: 20,
    color: "black"

  }


})
export default PresentationScreen;



