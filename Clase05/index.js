/**
 * @format
 */

import { AppRegistry } from 'react-native';
import {App} from './src/App';
import { name as appName } from './app.json';


const myApp = new App ().render;

AppRegistry.registerComponent(appName, () => new App().render);