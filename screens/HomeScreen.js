import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button,TouchableOpacity } from 'react-native';




const HomeScreen = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  validate = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setEmail("")
      console.log("Email is Not Correct");
      return false;
    }
    else {
      setEmail(text)

      console.log("Email is Correct");
    }
  }
 


  return (
    <View>
      <Text style={{ fontSize: 30, color: "green", textAlign: "center" }}>Welcome to the home page</Text>
      <TextInput style={Styles.input} placeholder='Enter your Email' onChangeText={(input) => validate(input)} />
      <TextInput style={Styles.input} placeholder='Enter your Passward' onChangeText={(input) => setPassword(input)} value={password} maxLength={5} secureTextEntry={true}
      />
    
      <View style={{ marginTop: 60, marginHorizontal: 100, }}>
        <Button title='Login'
          onPress={() => {
            if (email == "") {
              alert("please enter correct Email")
            } else if (email != "") {
              navigation.navigate('Detail', { email: email })
            }
          }}>
        </Button>
        
      </View>
    </View>)
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

export default HomeScreen;