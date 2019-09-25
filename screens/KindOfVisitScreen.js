import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	TouchableOpacity,
} from 'react-native';

import { KIND_OF_VISITS } from '../data/dummy-data';

const KindOfVisitScreen = props => {
	const renderGridItem = (itemData) => {
		return (
			<TouchableOpacity 
				style={styles.gridItem}
				onPress={() => {
					props.navigation.navigate({
						routeName: 'VisitDetail',
						params: {
							visitId: itemData.item.id,
						}
					})
				}}>
				<View>
					<Text>{itemData.item.title}</Text>
				</View>
			</TouchableOpacity>
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
	gridItem: {
		flex: 1,
		margin: 15,
		height: '10%',
	},
});

export default KindOfVisitScreen;
