import React from 'react';
import { Text } from 'react-native';
export interface ProfileInterface {}

const Profile : React.FC<ProfileInterface> = () => {
	return <>
		<Text>Holaaa soy Profile jeje</Text>
	</>
};

export default Profile;
