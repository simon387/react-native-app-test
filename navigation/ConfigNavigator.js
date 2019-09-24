import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomePageScreen from '../screens/HomePageScreen';
import PresentationScreen from '../screens/PresentationScreen';
import KindOfVisitScreen from '../screens/KindOfVisitScreen';
import VisitDetailScreen from '../screens/VisitDetailScreen';
import ContractScreen from '../screens/ContractScreen';
import GameOverScreen from '../screens/GameOverScreen';

const ConfigNavigator = createStackNavigator({
	HomePage: HomePageScreen,
	Presentation: PresentationScreen,
	KindOfVisit: KindOfVisitScreen,
	VisitDetail: VisitDetailScreen,
	Contract: ContractScreen,
	GameOver: GameOverScreen,
});

export default createAppContainer(ConfigNavigator);
