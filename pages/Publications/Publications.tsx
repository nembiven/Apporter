import React, { useEffect , useState} from 'react';
import { ActivityIndicator, Button, Pressable, Text, View } from 'react-native';
import { db,collection, getDocs, onSnapshot} from '../../services/Firebase/Firebase';

import { FlatList } from 'react-native-gesture-handler';


export interface PublishInterface {}



const Publications: React.FC<PublishInterface> = () => {

	const [loading, setLoading] = useState(false);
	const [publishList, setPublishList] = useState([]);
	const getPublishList = async () =>{
		setLoading(true);
		const querySnapshot = await getDocs(collection(db,"publish"));
		adaptList(querySnapshot)
	}
	const adaptList = (qsnp : any) =>{
		setPublishList(qsnp.docs.map((doc : any)=> ({...doc.data(),id:doc.id})))
		setLoading(false)
	}
	useEffect(()=>{
		getPublishList();

	},[])

	const PublishItem = (props:any) =>{
		return (
			<View>
				<Pressable>
					<Button title={props.title}></Button>
				</Pressable>
				<Text>Publicacion</Text>
			</View>
		)
	}
	if(loading){
		return (
			<ActivityIndicator/>
		)
	}
	return <>
		<Text>Soy publish jeje</Text>
		{
			publishList.length>0? 
			(
			<FlatList
				data={publishList} 
				renderItem={({item}) =><PublishItem title={item.title}/>}
				keyExtractor = {item => item.id}
			/>)
			:
			(<Text>Nada que mostrar!</Text>)
		}	
	</>
};

export default Publications;
