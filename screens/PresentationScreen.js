import React from 'react';
import {
	View,
	Text,
	Button,
	StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const PresentationScreen = props => {
	return (
		<View style={styles.screen}>
			<TextInput
				placeholder="Your full name:"
			/>
			<Button
				title="Is this you?"
				onPress={() => {
					props.navigation.navigate('KindOfVisit');
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
});

export default PresentationScreen;
