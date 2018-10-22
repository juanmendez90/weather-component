import React from 'react';
import { Row, Col, CardDeck } from 'reactstrap';
import { connect } from 'react-redux';

import citiesDB from 'constants/cities';
import { getWeatherForCities } from 'redux/actions/weather';
import WeatherCard from 'components/WeatherCard';
import Loader from 'components/Loader';

class WeatherApp extends React.Component {
  componentDidMount() {
    this.getData();
    setInterval(this.getData, 180000);
  }

  getData = () => {
    this.props.getWeatherForCities(citiesDB);
  }

  renderCards = () => (
    <CardDeck>
      {this.props.weatherReducer.citiesData.map((data, index) => <WeatherCard key={index} data={data} />)}
    </CardDeck>
  );

  renderContent = () => {
    if (this.props.weatherReducer.citiesData.length) {
      return this.renderCards();
    }
    if (this.props.weatherReducer.isLoading) {
      return (<Loader />);
    }

    return null;
  }

  render() {
    return (
      <Row className="align-items-center">
        <Col>
          <h3 className="text-center">Weather for cities:</h3>
          {this.renderContent()}
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  weatherReducer: state.weatherReducer,
});

const mapActionsToProps = dispatch => ({
  getWeatherForCities: (citites) => dispatch(getWeatherForCities(citites)),
});

export default connect(mapStateToProps, mapActionsToProps)(WeatherApp);
