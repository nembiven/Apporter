import React from 'react';
import { Text, SafeAreaView, View, Pressable,TextInput, Button, Alert, StyleSheet, ScrollView  } from 'react-native';
import { useEffect, useState } from 'react';
import {addDoc,getDocs,collection, getFirestore } from 'firebase/firestore';

export interface ProfileInterface {}


const Profile : React.FC<ProfileInterface> = () => {
	console.log("Hola soy profile")

	const [title, setTitle] = useState("");
	const [description, setdescription] = useState("");
	const [lat, setlat] = useState("");
	const [long, setlong] = useState("");
	const [label, setlabel] = useState("");

	const addPublish = async () =>{
        try{console.log("hola1111111111")
            const docRef = await addDoc(collection(getFirestore(),'publish'),{
                title: title,
				description:description,
				lat:Number(lat),
				long:Number(long),
				label:label,
                isActive: true,
            })

        }
        catch(e){
            console.error("ERROR ADDING DOCUMENT: ",e);
        }
    }
	return <>
	<SafeAreaView>
	<ScrollView><View style={styles.title}>
      <Text>Título:</Text>
      <TextInput
        placeholder=' Enter titulo'
		style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText = {(text) => setTitle(text)}
	  />
	  
	  <Text>Descripción:</Text>
      <TextInput
		placeholder=' Enter descripción'
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText = {(text) => setdescription(text)}
      />
	  	  <Text>Latitud:</Text>
      <TextInput
		placeholder=' Enter latitud'
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText = {(text) => setlat(text)}
      />
	  	  <Text>Longitud:</Text>
      <TextInput
		placeholder=' Enter longitud'
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText = {(text) => setlong(text)}
      />
		<Text>Etiqueta:</Text>
      <TextInput
	  placeholder=' Enter etiqueta'
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText = {(text) => setlabel(text)}
      />

    </View>

	<View style={styles.fixToText}>

	<Button 
          title="Publicar"
          onPress={() => addPublish()}
        />

	</View>
	</ScrollView>
	</SafeAreaView>
	</>
};

const styles = StyleSheet.create({
	input: {
	  height: 40,
	  margin: 12,
	  borderWidth: 1,
	  padding: 10,
	},
	container: {
	  flex: 1,
	  justifyContent: 'center',
	  marginHorizontal: 16,
	},
	title: {
	  textAlign: 'center',
	  marginVertical: 20,
	  marginHorizontal: 10,
	},
	fixToText: {
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	},
	separator: {
	  marginVertical: 8,
	  borderBottomColor: '#737373',
	  borderBottomWidth: StyleSheet.hairlineWidth,
	},
  });

export default Profile;
