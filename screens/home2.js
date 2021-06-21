import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'


export default function noobHome() {
  return (
    <View style={styles.container}>
     
        <Text style={{color:'white',fontSize:50}}>Netflix</Text>
        <Text style={{color:'white',fontSize:20}}>ThIs Is NeTfLiX cLoNe </Text>
        <Text style={{color:'white',fontSize:20}}>Enjoy Some Movies </Text>
        <TouchableOpacity style={styles.playbtn}>
          <Text style={{color:'white',fontSize:20}}>Play movies</Text>
        </TouchableOpacity>


      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },

  playbtn:{
    padding:20,
    backgroundColor:'red',
    borderRadius:20,
    margin:30,
  }




});
