import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomePageScreen from '../screens/HomePageScreen';
import PresentationScreen from '../screens/PresentationScreen';
import KindOfVisitScreen from '../screens/KindOfVisitScreen';
import VisitDetailScreen from '../screens/VisitDetailScreen';
import ContractScreen from '../screens/ContractScreen';
import GameOverScreen from '../screens/GameOverScreen';

import Colors from '../constants/Colors';

const ConfigNavigator = createStackNavigator({
	HomePage: {
		screen: HomePageScreen,
		navigationOptions: {
			headerTitle: 'Home'
		}
	},
	Presentation: {
		screen: PresentationScreen,
		navigationOptions: {
			headerTitle: 'Your Name'
		}
	},
	KindOfVisit: {
		screen: KindOfVisitScreen,
		navigationOptions: {
			headerTitle: 'Kind of Visit'
		}
	},
	VisitDetail: {
		screen: VisitDetailScreen,
		navigationOptions: {
			
		}
	},
	Contract: {
		screen: ContractScreen,
		navigationOptions: {
			headerTitle: ''
		}
	},
	GameOver: {
		screen: GameOverScreen,
		navigationOptions: {
			headerTitle: ''
		}
	},
}, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Colors.primaryColor,
		},
		headerTintColor: 'white',
	}
});

export default createAppContainer(ConfigNavigator);
