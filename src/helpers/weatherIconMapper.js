import { get } from 'lodash';
import iconDB from 'constants/iconDB';

export default code => get(iconDB[code], 'icon', 'sunny');
