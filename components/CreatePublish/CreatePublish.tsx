import React from 'react';
import { TouchableOpacity, Text, SafeAreaView, View, TextInput,  Alert, StyleSheet } from 'react-native';
import {useState } from 'react';
import {addDoc,collection, getFirestore } from 'firebase/firestore';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import { useNavigation } from '@react-navigation/core';
import SelectDropdown from 'react-native-select-dropdown'
import { Auth, getAuth } from 'firebase/auth';
import { app } from '../../services/Firebase/Firebase';
export interface CreatePublishInterface {}

const CreatePublish : React.FC<CreatePublishInterface> = () => {
  const auth = getAuth(app)
	const [title, setTitle] = useState("");
	const [description, setdescription] = useState("");
	const [lat, setlat] = useState("");
	const [long, setlong] = useState("");
	const [label, setlabel] = useState("");
  const [adress, setadress] = useState("");
  const [phone, setphone] = useState("");
  const [mail, setmail] = useState("");
  const navigation = useNavigation()
	const addPublish = async () =>{
    try{
      const docRef = await addDoc(collection(getFirestore(),'publish'),{
        idUser : auth.currentUser?.uid,
        title: title,
        description:description,
        lat:Number(lat),
        long:Number(long),
        label:label,
        date : new Date(),
        adress:adress,
        mail: mail,
        phone:phone,
      })
      
      navigation.navigate('Navigation')

  }
  catch(e){
      console.error("ERROR ADDING DOCUMENT: ",e);
  }
    }
	return <>
	<SafeAreaView style={styles.containerMain}>


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
      <Text style={styles.title}>Telefono:</Text>
      <TextInput
        placeholder=''
        style={styles.label}
        allowFontScaling
        multiline={true}
        onChangeText = {(text) => setphone(text)}
      />
		  <Text style={styles.title}>Etiqueta:</Text>
      <SelectDropdown
	        data={['Comida','Dinero','Ropa','Olla_comun','Juguetes']}
	        onSelect={(selectedItem, index) => {
            setlabel(selectedItem)
		    console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
       
      <Text style={styles.title}>Dirección:</Text>
      <View style={styles.autocomplete}>
      <GooglePlacesAutocomplete styles={{
    textInputContainer: {
      backgroundColor: '#FFF3EB',
    },
    textInput: {
      height: 38,
      color: '#FFFFF',
      fontSize: 16,
    },
 
  }}
        GooglePlacesDetailsQuery={{ fields: "geometry" }}
        fetchDetails={true} // you need this to fetch the details object onPress
        placeholder="Search"
        query={{
          key: "AIzaSyDLxXazrr1YQSQCXOx5vRCMbYBkq3lY4uo",
          components: 'country:cl',
          language: "es", // language of the results
        }}
        onPress={(data: any, details: any = null) => {
          setadress(data.description)
          setlat(details.geometry.location.lat)
          setlong(details.geometry.location.lng)

        }}
        onFail={(error) => Alert.alert(error)} />
      </View>


      <View style={styles.cont}>
        { 
        	(title!="" && description!='' && lat!='' && long!='' && label!='' && adress!='') ?
          (<TouchableOpacity
            onPress={addPublish}
            style={styles.button}
            activeOpacity={1}>
            <Text style={styles.textButton}>Publicar</Text>
          </TouchableOpacity>):(<></>)
        }
        
      </View>
    </View>

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
  autocomplete:{
    maxHeight: 100,
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


