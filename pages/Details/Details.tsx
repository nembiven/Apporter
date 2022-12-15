import React from 'react';
import { ActivityIndicator, Button, Pressable, Text, View, Image, TouchableOpacity } from 'react-native';
export interface DetailsInterface {}

const Details : React.FC<DetailsInterface> = (props) => {
	const info = props.route.params
	return <>
	
		<Text>
			Titulo: {info.title} {"\n"}
			Id : {info.id}~{"\n"}
			{info.isActive}
		</Text>
	</>;
};

export default Details;
