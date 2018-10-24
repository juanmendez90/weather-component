
import moment from 'moment'
import { writeLog } from 'redux/actions/appLog';
import { WRITE_LOG} from 'redux/constants/appLog';

describe('Alert Actions', () => {
  const todoText = 'A todo';

  it('Should create an action to write in the log', () => {
    const data = {
      text: 'log entry',
    };
    const result = writeLog(data);
    const expectedAction = {
      type: WRITE_LOG,
      data: {
        ...data,
        date: result.data.date,
      },
    };

    expect(result).toEqual(expectedAction);
  });
});
