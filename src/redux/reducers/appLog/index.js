import * as consts from 'redux/constants/appLog';

const initialState = {
  log: [],
};

export default (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case consts.WRITE_LOG: {
      debugger
      const log = state.log.slice();
      log.push(data);
      return {
        ...state,
        log,
      };
    }
    default:
      return state;
  }
};
