import React from 'react';
import { useState} from 'react';
import { useRoute } from '@react-navigation/native';

import { View, Text, TextInput, StyleSheet, Button, Switch } from 'react-native';


const DetailScreen = ({navigation}) => {

    const route = useRoute();
  
    const [checked, setChecked] = useState()
    const [mName, setmName] = useState("")
    const [mMobileno, setmMobileno] = useState("")
   
    return (
      <View >
        <TextInput style={Styles.input} placeholder="Enter Your Name" onChangeText={(input) => setmName(input)}></TextInput>
        <TextInput style={Styles.input} placeholder='Enter your Number' onChangeText={(input) => setmMobileno(input)} />
        <View >
          <Text style={{marginLeft:30, marginTop:20}}>Is a Member</Text>
          </View>
          <View style={{marginRight:220, marginBottom:30}}>
          <Switch
            value={checked}
            onValueChange={setChecked}>   
          </Switch>

          </View>
          
        <View style={{marginHorizontal:80, marginTop:50}}>
          <Button  title='Next'
          onPress={() => {
            navigation.navigate('Final',{name:mName,Mobileno:mMobileno,email:route.params.email, checked:checked})
          }}>
  
          </Button>
        
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

  export default DetailScreen; 