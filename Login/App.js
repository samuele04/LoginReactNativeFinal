import React, {useState} from 'react';

import { StyleSheet ,Button, View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import AsyncStorage from '@react-native-async-storage/async-storage';


function HomeScreen({ navigation, route }) {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const saveName = () => {
    if (name) {
      //To check the input not empty
      AsyncStorage.setItem('any_key_here', name);
      //Setting a data to a AsyncStorage with respect to a key
      setName('');
      //Resetting the TextInput
      alert('Data Saved');
      navigation.navigate({
            name: 'LogIn',
            params: { post: name },
            merge: true,
          });
          getName();
      //alert to confirm
    } else {
      alert('Please fill data');
      //alert for the empty InputText
    }
  };


  const getName = () => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem('any_key_here').then(
      (value) =>
        //AsyncStorage returns a promise so adding a callback to get the value
        setName(value)
      //Setting the value in Text
    );
  };



  const savePassword = () => {
    if (password) {
      //To check the input not empty
      AsyncStorage.setItem('any_key_here', password);
      //Setting a data to a AsyncStorage with respect to a key
      setPassword('');
      //Resetting the TextInput
      alert('Data Saved');
      navigation.navigate({
            name: 'LogIn',
            params: { post2: password },
            merge: true,
          });
          getPassword();
      //alert to confirm
    } else {
      alert('Please fill data');
      //alert for the empty InputText
    }
  };


  const getPassword = () => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem('any_key_here').then(
      (value) =>
        //AsyncStorage returns a promise so adding a callback to get the value
        setPassword(value)
      //Setting the value in Text
    );
  };

  return (
    <View style={styles.imgBG}>
    <ImageBackground source={require('./images/imag1.png')} resizeMode="cover" style={styles.image}>
<View style={{backgroundColor:'black', opacity:.5, flex:1, display:'flex', alignItems:'center', justifyContent:'center'}}>
  <Text style={{fontSize:75,  color:'white', marginVertical:20, marginTop:-60}}>Log in</Text>
<TextInput
  placeholder="Email"
  value={name}
  onChangeText={setName}
  style={styles.placeholder}
  placeholderTextColor={'white'}
/> 

<TextInput
  placeholder="Password"
  value={password}
  onChangeText={setPassword}
  style={styles.placeholder}
  placeholderTextColor={'white'}
  secureTextEntry={true}
/> 

<TouchableOpacity
      onPress={
        () => { saveName(); savePassword(); }
       }
          style={{backgroundColor:'red', padding:20, borderRadius:5}}
         >
          <Text >Log in</Text>
        </TouchableOpacity>
</View>
      </ImageBackground>
{/*
    <TouchableOpacity
          onPress={saveData}
         >
          <Text > SAVE VALUE </Text>
        </TouchableOpacity>

        <Text>{setName}</Text>

  */}    

  {/*}
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={name}
        onChangeText={setName}
      />

    <TouchableOpacity
          onPress={saveData}
         >
          <Text > SAVE VALUE </Text>
        </TouchableOpacity>

        <Text>{setName}</Text>
  */}

  </View>


    





    

   
  );
}



function LogInScreen({ navigation, route }) {

 React.useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  React.useEffect(() => {
    if (route.params?.post2) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post2]);


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={{ margin: 10 }}>Name: {route.params?.post}</Text>
       <Text style={{ margin: 10 }}>Password: {route.params?.post2}</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="LogIn" component={LogInScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


const styles= StyleSheet.create(
  {
    imgBG: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    placeholder: {
      color: "white",
      fontSize: 20,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
      padding:10,
      width:'100%',
      marginVertical:5,
    }
  }
)