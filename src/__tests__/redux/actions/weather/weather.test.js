import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import tk from 'timekeeper';
import * as actions from 'redux/actions/weather';
import { processLogEntry } from 'redux/actions/appLog';
import * as consts from 'redux/constants/weather';
import * as appLogConsts from 'redux/constants/appLog';
import getWeatherMock from 'mocks/getWeatherByCity';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const time = new Date(1893448800000);

tk.freeze(time);

// The time hasn't changed at all.

describe('Weather Actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('Should create an action to get weather data', () => {
    const cities = [{
      countryCode: 'cl',
      country: 'Chile',
      city: 'Santiago',
    }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getWeatherMock,
      });
    });
    const store = mockStore({
      weatherReducer: {
        isLoading: false,
        citiesData: [],
        error: '',
      },
    });
    const expectedActions = [
      { type: consts.GET_WEATHER_FOR_CITIES },
      { type: appLogConsts.WRITE_LOG, data: processLogEntry({ data: getWeatherMock, type: 'success' }) },
      {
        type: consts.GET_WEATHER_FOR_CITIES_RECEIVED,
        data: [actions.processWeather(getWeatherMock)],
      },
    ];

    return store.dispatch(actions.getWeatherForCities(cities)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      tk.reset();
    });
  });
});
