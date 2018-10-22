import * as consts from 'redux/constants/alert';

const initialState = {
  text: null,
  color: '',
};

export default (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case consts.SHOW_ALERT: {
      return {
        ...state,
        text: data.text,
        color: data.color,
      };
    }
    case consts.HIDE_ALERT:
      return {
        ...state,
        text: null,
        color: '',
      };
    default:
      return state;
  }
};
