import * as actions from 'redux/actions/alert';
import * as consts from 'redux/constants/alert';
import alertcolors from 'constants/alertColors';

describe('Alert Actions', () => {
  it('Should create an action to show an alert', () => {
    const data = {
      text: 'This is a test alert',
      color: alertcolors.success,
    };
    const expectedAction = {
      type: consts.SHOW_ALERT,
      data,
    };

    expect(actions.showAlert(data)).toEqual(expectedAction);
  });

  it('Should create an action to hide an alert', () => {
    const expectedAction = {
      type: consts.HIDE_ALERT,
    };

    expect(actions.hideAlert()).toEqual(expectedAction);
  });
});
