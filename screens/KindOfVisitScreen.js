import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	FlatList,
} from 'react-native';

import { KIND_OF_VISITS } from '../data/dummy-data';

const renderGridItem = (itemData) => {
	return (
		<View style={styles.gridItem}>
			<Text>{itemData.item.title}</Text>
		</View>
	);
}

const KindOfVisitScreen = props => {
	return (
		<FlatList 
			numColumns={2}
			data={KIND_OF_VISITS}
			renderItem={renderGridItem}
			keyExtractor={(item, index) => {item.id}}
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
