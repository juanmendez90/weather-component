import React from 'react';
import { connect } from 'react-redux';
import { Table, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

import { appLogModel } from 'models/shapes';

const renderContent = log => log.map((item, index) => (
  <tr key={index}>
    <td>{item.date}</td>
    <td>{item.type}</td>
    <td>{JSON.stringify(item.data)}</td>
  </tr>
));

const LogScreen = ({ log }) => (
  <Row>
    <Col>
      <Table responsive>
        <thead>
          <tr>
            <th>date</th>
            <th>type</th>
            <th>data</th>
          </tr>
        </thead>
        <tbody>
          {renderContent(log)}
        </tbody>
      </Table>
    </Col>
  </Row>
);

LogScreen.propTypes = {
  log: PropTypes.arrayOf(appLogModel).isRequired,
};

const mapStateToProps = state => ({
  log: state.appLogReducer.log,
});

export default connect(mapStateToProps)(LogScreen);
