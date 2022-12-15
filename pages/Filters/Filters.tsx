import React from 'react';
import { Text } from 'react-native';
export interface FiltersInterface {}

const Filters : React.FC<FiltersInterface> = () => {
	console.log("Hola soy filters")
	return <>
		<Text>Holaaa soy filtros jeje</Text>
	</>
};

export default Filters;
