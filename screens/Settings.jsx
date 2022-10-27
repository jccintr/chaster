import React, { useState,useEffect } from 'react'
import { StyleSheet, Text,Image,TextInput, SafeAreaView,View,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { cores } from '../cores';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import avatar from '../assets/default_avatar.jpg'

const Settings = () => {
  const [title,setTitle] = useState('');
  const [keyholderName,setkeyholderName] = useState('');
  const [wearerName,setWearerName] = useState('');
  const [keyholderAvatar,setKeyholderAvatar] = useState(null)
  const [wearerAvatar,setWearerAvatar] = useState(null);
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

  const selectKeyholderAvatar = async () =>{
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 4],
      quality: 1,
    });

  

    if (!result.cancelled) {
      setKeyholderAvatar(result.uri);
     
    }

  }


  const selectWearerAvatar = async () =>{
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 4],
      quality: 1,
    });

  

    if (!result.cancelled) {
      setWearerAvatar(result.uri);
      
    }

  }

  const onSave = async () => {

    await AsyncStorage.setItem('title', title);
    await AsyncStorage.setItem('keyholder', keyholderName);
    await AsyncStorage.setItem('wearer', wearerName);
    await AsyncStorage.setItem('wearerAvatar', wearerAvatar);
    await AsyncStorage.setItem('keyholderAvatar', keyholderAvatar);
    navigation.navigate('Start');
    

  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>SETTINGS</Text>
        <View style={styles.inputArea}>
            <TextInput style={styles.input}
                placeholder="Enter title"
                value={title}
                onChangeText={t=>setTitle(t)}
              />
         </View>
         <TouchableOpacity style={styles.avatarArea} onPress={selectKeyholderAvatar}>
             <Text style={{color:cores.branco,fontsize: 14}}>Keyholder Avatar</Text>
             <Image source={{ uri: keyholderAvatar }} style={{ width: 80, height: 80,borderRadius:40,margin:5 }} />
         </TouchableOpacity>
         <View style={styles.inputArea}>
            <TextInput style={styles.input}
                    placeholder="Keyholder name"
                    value={keyholderName}
                    onChangeText={t=>setkeyholderName(t)}
            />
         </View>
         <TouchableOpacity style={styles.avatarArea} onPress={selectWearerAvatar}>
             <Text style={{color:cores.branco,fontsize: 14}}>Wearer Avatar</Text>
             <Image source={{ uri: wearerAvatar }} style={{ width: 80, height: 80,borderRadius:40,margin:5 }} />
         </TouchableOpacity>
         <View style={styles.inputArea}>
            <TextInput style={styles.input}
                    placeholder="Wearer name"
                    value={wearerName}
                    onChangeText={t=>setWearerName(t)}
            />
         </View>
         <TouchableOpacity  onPress={onSave} style={styles.button}>
         <Text style={styles.buttonText}>SAVE</Text>
       </TouchableOpacity>

   </View>
  )
}

export default Settings


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: cores.fundo,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: cores.branco,
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    avatarArea:{
      width: 150,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderStyle: 'dashed',
      borderColor: cores.button,
      borderRadius: 15,
      marginBottom: 5,
      
    },
    inputArea: {

      width: '90%',
      height: 50,
      flexDirection: 'row',
      borderColor: '#c1c1c1',
      borderWidth: 1,
      paddingLeft: 15,
      alignItems: 'center',
      marginBottom: 5,
      borderRadius: 15,
      backgroundColor: '#FFF',
     
  },
 input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 4,
    color: cores.secundario,
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