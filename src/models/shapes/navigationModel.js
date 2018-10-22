import PropTypes from 'prop-types';

export const navigationModel = PropTypes.shape({
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
});

export default navigationModel;
