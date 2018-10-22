import * as consts from 'redux/constants/weather';
import * as alertActions from 'redux/actions/alert';
import * as appLogActions from 'redux/actions/appLog';
import alertColors from 'constants/alertColors';
import * as API from 'api';

export const processWeather = item => ({
  ...item,
  weather: item.weather[0],
});

export const getWeatherForCities = cities => (dispatch, getState) => {
  dispatch({ type: consts.GET_WEATHER_FOR_CITIES });
  const { weatherReducer } = getState();
  const promises = cities.map(city => API.getWeatherByCity(city));
  return Promise.all(promises)
    .then((response) => {
      const data = response.map(item => processWeather(item));
      if (weatherReducer.citiesData.length) {
        dispatch(alertActions.showAlert({ text: 'Data updated successfully', color: alertColors.success }));
        setTimeout(() => dispatch(alertActions.hideAlert()), 1500);
      }
      response.map(item => dispatch(appLogActions.writeLog({ data: item, type: 'success' })));
      return dispatch({ type: consts.GET_WEATHER_FOR_CITIES_RECEIVED, data });
    })
    .catch((error) => {
      dispatch(appLogActions.writeLog({ data: error, type: 'error' }));
      dispatch(alertActions.showAlert({ text: `ERROR: ${error.response.data.message}`, color: alertColors.error }));
      return dispatch({ type: consts.GET_WEATHER_FOR_CITIES_FAILED, error });
    });
};

export default getWeatherForCities;
