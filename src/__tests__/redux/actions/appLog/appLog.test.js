
import moment from 'moment'
import * as actions from 'redux/actions/appLog';
import * as consts from 'redux/constants/appLog';
import alertcolors from 'constants/alertColors';

describe('Alert Actions', () => {
  const todoText = 'A todo';

  it('Should create an action to write in the log', () => {
    const data = {
      text: 'log entry',
    };
    const result = actions.writeLog(data);
    const expectedAction = {
      type: consts.WRITE_LOG,
      data: {
        ...data,
        date: result.data.date,
      },
    };

    expect(result).toEqual(expectedAction);
  });
});
