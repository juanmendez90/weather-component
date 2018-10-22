import LogScreen from 'containers/LogScreen';
import WeatherScreen from 'containers/WeatherScreen';

export default [{
  path: '/',
  title: 'Weather',
  component: WeatherScreen,
},
{
  path: '/log',
  title: 'App Log',
  component: LogScreen,
}];
