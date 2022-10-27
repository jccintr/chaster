import React, { useState } from 'react'
import { StyleSheet, Text,Image,TextInput, SafeAreaView,View,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { cores } from '../cores';
import logo from '../assets/logo-chaster.png';
import { useNavigation } from '@react-navigation/native';

const Start = () => {
    const [verificationCode,setVerificationCode] = useState('');
    const navigation = useNavigation();
  return (
   <View style={styles.container}>
        <Image source={logo} style={styles.logo}/>
        <View style={styles.inputArea}>
            <TextInput style={styles.input}
                placeholder="Enter verification code"
                value={verificationCode}
                onChangeText={t=>setVerificationCode(t)}
                keyboardType="number-pad"
                />
        </View>
        <TouchableOpacity  onPress={() => navigation.navigate('Verification')} style={styles.button}>
         <Text style={styles.buttonText}>GENERATE VERIFICATION</Text>
       </TouchableOpacity>
       <TouchableOpacity  onPress={() => navigation.navigate('Settings')} style={styles.button}>
         <Text style={styles.buttonText}>SETTINGS</Text>
       </TouchableOpacity>
   </View>
  )
}

export default Start

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: cores.fundo,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        marginBottom: 30,
    },
    inputArea: {

        width: '90%',
        height: 50,
        flexDirection: 'row',
        borderColor: '#c1c1c1',
        borderWidth: 1,
        paddingLeft: 15,
        alignItems: 'center',
        marginBottom: 15,
        borderRadius: 15,
        backgroundColor: '#FFF',
       
    },
   input: {
      flex: 1,
      fontSize: 16,
      paddingHorizontal: 4,
      color: '#c1c1c1',
      marginLeft: 10,
    },
    button:{
        width: '90%',
        height: 50,
        backgroundColor: cores.button,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:15,
        marginBottom: 10,
      
      },
      buttonText:{
        color: '#fff',
        fontSize: 16,
     
        fontWeight: 'bold',
      },
    
   
  });