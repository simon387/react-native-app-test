import React from 'react';
import {
	View,
	Text,
	StyleSheet,
} from 'react-native';

import { KIND_OF_VISITS } from '../data/dummy-data';

const VisitScreen = props => {
	const visitId = props.navigation.getParam('visitId');
	const selectedVisit = KIND_OF_VISITS.find(visit => visit.id === visitId);
	return (
		<View style={styles.screen}>
			<Text>The VisitScreen Screen!</Text>
			<Text>{selectedVisit.title}</Text>
			
		</View>
	);
};

VisitScreen.navigationOptions = (navigationData) => {
	const visitId = navigationData.navigation.getParam('visitId');
	const selectedVisit = KIND_OF_VISITS.find(visit => visit.id === visitId);
	return {
		headerTitle: selectedVisit.title,
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default VisitScreen;
