import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import KindOfVisitTile from '../components/KindOfVisitTile';

import { KIND_OF_VISITS } from '../data/dummy-data';
import Colors from '../constants/Colors';

const KindOfVisitScreen = props => {
	const renderGridItem = (itemData) => {
		return (
			<KindOfVisitTile
				title={itemData.item.title}
				color={'#9a4bfa'}
				onSelect={() => {
					props.navigation.navigate({
						routeName: 'VisitDetail',
						params: {
							visitId: itemData.item.id,
						}
					})
				}}>
			</KindOfVisitTile>
		);
	};

	return (
		<FlatList 
			numColumns={2}
			data={KIND_OF_VISITS}
			renderItem={renderGridItem}
			keyExtractor={(item, index) => {return item.id}}
		/>
	);
};



const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default KindOfVisitScreen;
