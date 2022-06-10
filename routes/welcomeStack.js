import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import WelcomeScreen from '../app/screens/WelcomeScreen';
import HomeScreen from '../app/screens/HomeScreen';

const screens = {
    Welcome: {
        screen: WelcomeScreen
    },
    Home: {
        screen: HomeScreen
    }
}

const wlcomeStack = createStackNavigator (screens);

export default createAppContainer(wlcomeStack);
