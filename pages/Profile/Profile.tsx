import React from 'react';
import { Text, SafeAreaView, View, Pressable,TextInput } from 'react-native';
import { useEffect, useState } from 'react';
import {addDoc,getDocs,collection, getFirestore } from 'firebase/firestore';

export interface ProfileInterface {}


const Profile : React.FC<ProfileInterface> = () => {
	const [title, setTitle] = useState("");

	const addPublish = async () =>{
		try{
			const docRef = await addDoc(collection(getFirestore(),'publish'),{
				title: title,
				isActive: true,
			})
			
		}
		catch(e){
			console.error("ERROR ADDING DOCUMENT: ",e);
		}
	}
	return <>
	<SafeAreaView>
		<View>
		<TextInput
			placeholder='Enter titulo'
			onChangeText = {(text) => setTitle(text)}
			onSubmitEditing={addPublish}/>
		</View>
	</SafeAreaView>
		<Text>Holaaa soy Profile jeje</Text>
		
			
	</>
};

export default Profile;
