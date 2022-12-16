import React from 'react';
import { Text, SafeAreaView, View, Pressable,TextInput, Button, Alert, StyleSheet, ScrollView  } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';

export interface ProfileInterface {}


const Profile : React.FC<ProfileInterface> = () => {
	
  const navigation = useNavigation()

	const goPublish = () =>{
		navigation.navigate('CreatePublish')
	}
	
	return <>
	<SafeAreaView>
	<View>

	<Button 
          title="Publicar"
          onPress={() => goPublish()}
        />

	</View>
	
	</SafeAreaView>
	</>
};

const styles = StyleSheet.create({
	
  });

export default Profile;
