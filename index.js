import App from './src/App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// "lint-staged": {
//     "src/**/*.{js,jsx,ts,tsx}": [
//       "yarn lint",
//       "yarn format"
//     ]
//   }
