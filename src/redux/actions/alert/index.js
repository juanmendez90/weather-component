import * as consts from 'redux/constants/alert';

export const showAlert = ({ text, color }) => ({
  type: consts.SHOW_ALERT,
  data: {
    text,
    color,
  },
});

export const hideAlert = () => ({
  type: consts.HIDE_ALERT,
});
