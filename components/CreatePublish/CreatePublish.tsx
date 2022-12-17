import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, View, Pressable,TextInput, Button, Alert, StyleSheet, ScrollView  } from 'react-native';
import { useEffect, useState } from 'react';
import {addDoc,getDocs,collection, getFirestore } from 'firebase/firestore';
import {Publish} from '../../models';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
export interface CreatePublishInterface {}

const CreatePublish : React.FC<CreatePublishInterface> = () => {
	const [title, setTitle] = useState("");
	const [description, setdescription] = useState("");
	const [lat, setlat] = useState("");
	const [long, setlong] = useState("");
	const [label, setlabel] = useState("");
  const [adress, setadress] = useState("");

	const addPublish = async () =>{
        try{
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
	<SafeAreaView style={styles.containerMain}>
	<ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Título:</Text>
      <TextInput
        placeholder=''
		    style={styles.label}
        onChangeText = {(text) => setTitle(text)}
	    />
      <Text style={styles.title}>Descripción:</Text>
      <TextInput
        placeholder=''
        style={styles.labelDes}
        allowFontScaling
        multiline={true}
        onChangeText = {(text) => setdescription(text)}
      />
	  	<Text style={styles.title}>Latitud:</Text>
      <TextInput
		    placeholder=''
        style={styles.label}
        onChangeText = {(text) => setlat(text)}
      />
	  	<Text style={styles.title}>Longitud:</Text>
      <TextInput
		    placeholder=''
        style={styles.label}
        onChangeText = {(text) => setlong(text)}
      />
		  <Text style={styles.title}>Etiqueta:</Text>
      <TextInput
	      placeholder=''
        style={styles.label}
        onChangeText = {(text) => setlabel(text)}
      />
      <View style={styles.cont}>
        <TouchableOpacity
          onPress={addPublish}
          style={styles.button}
          activeOpacity={1}>
          <Text style={styles.textButton}>Publicar</Text>
        </TouchableOpacity>
      </View>
    </View>
	</ScrollView>
	</SafeAreaView>

	</>
};

const styles = StyleSheet.create({
  containerMain:{
    flex: 1,
    backgroundColor: '#F3AE5F',
    alignItems: 'center',
    justifyContent: 'center',
  },
	container:{
	  marginVertical: 20,
	  marginHorizontal: 10,
    backgroundColor: '#FFF3EB',
    borderRadius: 10,
	},
  cont:{
    alignItems: 'center',
    justifyContent: 'center',
  },
	title: {
	  color: '#333333',
		backgroundColor: 'transparent',
		fontSize: 20,
		textAlign: 'left',
    marginTop: 10,
    marginStart: 10,
	},
  label:{ //Label de input
    // alignContent: 'center',
    // justifyContent: 'center',
    backgroundColor: '#FFF3EB',
    position: 'relative',
    width: 340,
    height: 40,
    borderColor: '#0B87BA',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    color: '#333333',
    fontSize: 15,
    textAlign: 'left',
    margin: 5,
    padding: 10,
  },
  labelDes:{ //Label de input
    // alignContent: 'center',
    // justifyContent: 'center',
    backgroundColor: '#FFF3EB',
    position: 'relative',
    width: 340,
    height: 90,
    borderColor: '#0B87BA',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 10,
    color: '#333333',
    fontSize: 15,
    textAlign: 'left',
    margin: 5,
    textAlignVertical: 'top',
    padding: 10,
  },
  textButton:{
		color: '#FFF3EB',
		backgroundColor: 'transparent',
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0B87BA',
		height: 50,
		width: 200,
		borderRadius: 15,
		margin: 10,
	},
  });
export default CreatePublish;




export interface ProfileInterface {}


