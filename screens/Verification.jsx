import React, { useState,useEffect } from 'react'
import { StyleSheet, Text,Image,TextInput, SafeAreaView,View,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { cores } from '../cores';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import avatar from '../assets/default_avatar.jpg';

const Verification = ({route}) => {
  const [title,setTitle] = useState('');
  const [keyholderName,setkeyholderName] = useState('');
  const [wearerName,setWearerName] = useState('');
  const [keyholderAvatar,setKeyholderAvatar] = useState(null)
  const [wearerAvatar,setWearerAvatar] = useState(null);
  const {verificationCode} = route.params;
  const navigation = useNavigation();


  useEffect(()=>{
    const getData = async () => {
      const t = await AsyncStorage.getItem('title');
      const w = await AsyncStorage.getItem('wearer');
      const wAvatar = await AsyncStorage.getItem('wearerAvatar');
      const kh = await AsyncStorage.getItem('keyholder');
      const khAvatar = await AsyncStorage.getItem('keyholderAvatar');
      setTitle(t);
      setWearerName(w);
      setkeyholderName(kh);
      setKeyholderAvatar(khAvatar);
      setWearerAvatar(wAvatar);
    }
    getData();
  },[]);




  return (
    <View style={styles.container}>
        <View style={styles.userContainer}>
            <Text style={styles.title}>{title}</Text>
            <Image source={keyholderAvatar ? { uri: keyholderAvatar }: avatar} style={{ width: 150, height: 150,borderRadius:75,margin:5 }} />
            <Text style={styles.keyholderName}>{keyholderName}</Text>
        </View>
        <View style={styles.codeArea}>
          <Text style={styles.codeLabel}>VERIFICATION CODE</Text>
          <Text style={styles.code}>{verificationCode}</Text>
        </View>
        <View style={styles.userContainer}>
            <Image source={wearerAvatar ? { uri: wearerAvatar }: avatar} style={{ width: 100, height: 100,borderRadius:50,margin:5 }} />
            <Text style={styles.wearerName}>{wearerName}</Text>
        </View>
   </View>
  )
}

export default Verification


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: cores.fundo,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingTop: 40,
      paddingBottom: 40,
    },
    userContainer:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    title:{
      fontSize:24,
       color: cores.branco,
    },
    keyholderName:{
      fontSize:24,
      color: cores.branco,
    },
    codeArea:{
      width: '90%',
       height: 100,
       backgroundColor: cores.secundario,
       borderRadius: 15,
       alignItems: 'center',
       justifyContent: 'space-around',
    },
    codeLabel:{
      fontSize:18,
       color: cores.azul,
       fontWeight: 'bold',
    },
    code:{
      fontWeight: 'bold',
      fontSize:40,
      color: cores.branco,
      letterSpacing: 4,
    },
    wearerName:{
      fontSize:18,
      color: cores.branco,
    },
  
   
    
   
  });