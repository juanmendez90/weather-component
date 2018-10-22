import moment from 'moment';
import * as consts from 'redux/constants/appLog';

export const processLogEntry = item => ({
  ...item,
  date: moment().utc().format('DD/MM/YYYY HH:mm:ss'),
});

export const writeLog = data => ({
  type: consts.WRITE_LOG,
  data: processLogEntry(data),
});
