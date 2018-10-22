import * as consts from 'redux/constants/weather';

const initialState = {
  isLoading: false,
  citiesData: [],
  error: '',
};

export default (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case consts.GET_WEATHER_FOR_CITIES: {
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    }
    case consts.GET_WEATHER_FOR_CITIES_RECEIVED: {
      return {
        ...state,
        isLoading: false,
        citiesData: data,
      };
    }
    case consts.GET_WEATHER_FOR_CITIES_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: '',
      };
    }
    default:
      return state;
  }
};
