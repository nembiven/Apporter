import React from 'react';
import { Text, SafeAreaView, View, TextInput, Button, StyleSheet, ScrollView  } from 'react-native';
import {  useState } from 'react';
import {addDoc,collection, getFirestore } from 'firebase/firestore';
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
	<SafeAreaView>

  
    <View style={styles.title}>
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
<GooglePlacesAutocomplete
    placeholder='Dirección'
    fetchDetails
    GooglePlacesDetailsQuery={{ fields: 'geometry', }}
    onPress={(data: any, details: any = null) => {
      setadress(data.description)
      setlat(details.geometry.location.lat)
      setlong(details.geometry.location.lng)
    }}
    query={{
      key:'AIzaSyDLxXazrr1YQSQCXOx5vRCMbYBkq3lY4uo',
      language:'es',
      components : 'country:chl'
    }}
    styles={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1
    }}
  />
	<Button 
          title="Publicar"
          onPress={() => addPublish()}
        />
  
	</View>
  <View>
  <Text>Latitud : {lat}, Longitud {long}</Text>
  </View>

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
export default CreatePublish;




export interface ProfileInterface {}


