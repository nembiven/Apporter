import React from 'react';
import {View,Button,TextInput,ScrollView,StyleSheet} from 'react-native';
import {PublishModel} from '../../models';
export interface CreatePublishInterface {}

const CreatePublish : React.FC<CreatePublishInterface> = () => {
	return <>
		<ScrollView>
			<View>
				<TextInput placeholder='Name user' onChangeText={(value)=>console.log(value)}/>
			</View>
			<View>
				<TextInput placeholder='Email user' onChangeText={(value)=>console.log(value)}/>
			</View>
			<View>
				<TextInput placeholder='Phone user' onChangeText={(value)=>console.log(value)}/>
			</View>
			<View>
				<Button title='Save User' />
			</View>
		</ScrollView>
	
	</>
};

export default CreatePublish;
