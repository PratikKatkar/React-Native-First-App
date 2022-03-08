// import * as React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';



// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={{ flex:1,justifyContent:"space-around",alignSelf:"center",margin:10 }}>
//       <Text style={{fontSize:30, fontWeight:"bold"}}>This is home screen</Text>


//       <View >
//         <Button
//           title="Detail"
//           onPress={() =>
//             navigation.navigate('DetailsScreen', { name: 'DetailsScreen' })
//           }
//         />
//       </View>


//       <View >
//          <Button
//         title="Demo"
//         onPress={() =>
//           navigation.navigate('DemoScreen', { name: 'DemoScreen' })
//         }
//       /></View>

//       <View>
//         <Button
//           title="Login"
//           onPress={() =>
//             navigation.navigate('LoginScreen', { name: 'LoginScreen' })
//           }
//         />
//       </View>

//     </View>


//   );
// };

// function DetailsScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>LOGIN</Text>
//     </View>
//   );
// }
// function LoginScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>registration page</Text>
//     </View>
//   );
// }
// function DemoScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>This is demo page</Text>
//       <Button title='Properties' onPress={ () => navigation.navigate('Detail')}></Button>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function AppTest() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: '#f4511e',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//             fontWeight: 'bold',
//           },
//         }}
//         initialRouteName="Home">
//         <Stack.Screen options={{ title: 'HomeScreen' }} name="Home" component={HomeScreen} />
//         <Stack.Screen options={{ title: 'DetailsScreen' }} name="DetailsScreen" component={DetailsScreen} />
//         <Stack.Screen options={{ title: 'Demo' }} name="DemoScreen" component={DemoScreen} />
//         <Stack.Screen options={{ title: 'login' }} name="LoginScreen" component={LoginScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default AppTest;

import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState } from 'react'
import { useRoute } from '@react-navigation/native'


const Stack = createNativeStackNavigator()

const HomeScreen = ({ navigation }) => {

  const [Mobileno, setMobileno] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <View>
      <Text style={{ fontSize: 30, color: "green", textAlign: "center" }}>Welcome to the home page</Text>
      <TextInput style={Styles.input} placeholder='Enter your Number' onChangeText={(input) => setMobileno(input)} />
      <TextInput style={Styles.input} placeholder='Enter your Email' onChangeText={(input) => setEmail(input)} />
      <TextInput style={Styles.input} placeholder='Enter your Passward' onChangeText={(input) => setPassword(input)} />
      <View style={{ marginTop: 60, marginHorizontal: 100, }}>
        <Button title='Login'
          onPress={() => {
            navigation.navigate('Detail', { MobileNo: Mobileno, Email: email, Password: password })
          }}>

        </Button>
      </View>
    </View>

  )
}

const DetailScreen = () => {
  const routes = useRoute();

  return (
    <View >
      <Text style={Styles.text}>
        Mobile No :{routes.params.MobileNo}
      </Text>
      <Text style={Styles.text}>
        Email :{routes.params.Email}
      </Text>
      <Text style={Styles.text}>
        Passward :{routes.params.Password}
      </Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'Home' }} ></Stack.Screen>
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: "Detail" }}></Stack.Screen>
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

  text:{
    fontSize:20,
    marginTop: 20,
    color:"black"
    
  }

  
})