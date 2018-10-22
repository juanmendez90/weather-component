import PropTypes from 'prop-types';

export const appLogModel = PropTypes.shape({
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

export default appLogModel;
