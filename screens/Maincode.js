

import { View, Text, TextInput, StyleSheet, Button, Switch } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import ToggleSwitch from 'toggle-switch-react-native';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
import Login from './screens/Login';
import Details from './screens/Details';
import Final from './screens/Final';


const Stack = createNativeStackNavigator()

const HomeScreen = ({ navigation }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  
  
  
  return (
    <View>
      <Text style={{ fontSize: 30, color: "green", textAlign: "center" }}>Welcome to the home page</Text>
      <TextInput style={Styles.input} placeholder='Enter your Email' onChangeText={(input) => setEmail(input)} />
      <TextInput style={Styles.input} placeholder='Enter your Passward' onChangeText={(input) => setPassword(input)} />
      <View style={{ marginTop: 60, marginHorizontal: 100, }}>
        <Button title='Login'
          onPress={() => {
            if(email==""){
              alert("enter your email")
            }else{
              navigation.navigate('Detail',{email:email})
            }
          }}>
        </Button>
      </View>
    </View>

)}

const DetailScreen = ({navigation}) => {

  const route = useRoute();

  const [checked, setChecked] = useState(false)
  const [mName, setmName] = useState("")
  const [mMobileno, setmMobileno] = useState("")
 
  return (
    <View >
      <TextInput style={Styles.input} placeholder="Enter Your Name" onChangeText={(input) => setmName(input)}></TextInput>
      <TextInput style={Styles.input} placeholder='Enter your Number' onChangeText={(input) => setmMobileno(input)} />
      <View style={{marginRight:300 }}>
        <Text>Is a Member</Text>
        <Switch
          value={checked}
          onValueChange={setChecked}        >   
        </Switch>
        
      </View>
      <View style={{marginHorizontal:80, marginTop:50}}>
        <Button  title='Next'
        onPress={() => {
          navigation.navigate('Final',{ name:mName,Mobileno:mMobileno,email: route.params.email, checked: route.params.checked})
        }}>

        </Button>
        <Text>Is CheckBox selected: {checked ? "true" : "false"}</Text>
      </View>

    </View>
  )
}

const PresentationScreen = () =>{

  const route = useRoute();
  
  return(
    <View >
      <Text style={{fontSize:30, textAlign:"center", marginTop:20 , color:"black"} }>
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
        checked Status :{route.params.checked ? "on " : "off"}      
        
      </Text>
      </View>
    </View>
  )

}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'Home' }} ></Stack.Screen>
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Detail" }}></Stack.Screen>
        <Stack.Screen name="Final" component={PresentationScreen} options={{ title: "All Details" }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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