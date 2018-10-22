import React from 'react';
import { connect } from 'react-redux';
import { Container, Alert } from 'reactstrap';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';

import Header from 'components/Header';
import navigation from 'navigation';
import { alertModel } from 'models/shapes';
import * as alertActions from 'redux/actions/alert';

import styles from  './styles.module.scss';

const history = createBrowserHistory();

const App = ({ hideAlert, alertReducer: { color, text } }) => (
  <Router history={history}>
    <>
      <Header title="Weather Application" links={navigation} />
      <main>
        <Container className={styles.app}>
          <Alert className={styles.alert} color={color} isOpen={!!text} toggle={hideAlert}>
            {text}
          </Alert>
          {
            navigation.map(item => (
              <Route key={item.title} exact path={item.path} component={item.component} />))
          }
        </Container>
      </main>
    </>
  </Router>
);

App.propTypes = {
  hideAlert: PropTypes.func.isRequired,
  alertReducer: alertModel.isRequired,
};

const mapStateToProps = state => ({
  alertReducer: state.alertReducer,
});

const mapActionsToProps = dispatch => ({
  hideAlert: () => dispatch(alertActions.hideAlert()),
});

export default connect(mapStateToProps, mapActionsToProps)(App);
