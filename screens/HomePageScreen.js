import React from 'react';
import {
	View,
	Text,
	Button,
	StyleSheet,
} from 'react-native';

import language from '../constants/language';

const HomePageScreen = props => {
	return (
		<View style={styles.screen}>
			<Text>Hola!</Text>
			<Button
				title={language.startButton}
				onPress={() => {
					props.navigation.navigate({
						routeName: 'Presentation'
					});
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

export default HomePageScreen;
