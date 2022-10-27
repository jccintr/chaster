import React, { useState } from 'react'
import { StyleSheet, Text,Image,TextInput, SafeAreaView,View,TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import { cores } from '../cores';
import { useNavigation } from '@react-navigation/native';

const Verification = () => {
  const [title,setTitle] = useState('');
  const [keyholderName,setkeyholderName] = useState('');
  const [wearerName,setWearerName] = useState('');
  const [keyholderAvatar,setKeyholderAvatar] = useState(null)
  const [wearerAvatar,setWearerAvatar] = useState(null);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <Text style={styles.title}>title</Text>
    <Image source={{ uri: wearerAvatar }} style={{ width: 80, height: 80,borderRadius:40,margin:5 }} />
    <Text style={styles.keyholderName}>keyholder name</Text>
    <Image source={{ uri: wearerAvatar }} style={{ width: 80, height: 80,borderRadius:40,margin:5 }} />
    <Text style={styles.wearerName}>wearer name</Text>
   
   </View>
  )
}

export default Verification


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: cores.fundo,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{

    },
    keyholderName:{

    },
    wearerName:{

    },
  
   
    
   
  });