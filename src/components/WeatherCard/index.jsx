import React from 'react';
import {
  Card, CardText, CardBody, CardTitle, Row, Col,
} from 'reactstrap';
import moment from 'moment';
import WeatherIcon from 'react-icons-weather';
import { capitalize } from 'lodash';

import { cityModel } from 'models/shapes';
import styles from './styles.module.scss';

const WeatherCard = ({ data }) => (
  <Card className={`${styles.card} mb-4`}>
    <CardBody className={styles.titleContainer}>
      <Row>
        <Col>
          <p className={styles.cityName}>{`${data.name}, ${data.sys.country}`}</p>
        </Col>
        <div className={styles.weatherIconContainer}>
          <WeatherIcon name="owm" iconId={data.weather.id.toString()} className={styles.weatherIcon} />
          <span className={styles.weatherIcon}>{`${data.main.temp}°C`}</span>
        </div>
      </Row>
    </CardBody>
    <CardBody>
      <CardTitle>{capitalize(data.weather.description)}</CardTitle>
      <CardText className="mb-0">
        {`Min: ${data.main['temp_min']}°C`}
      </CardText>
      <CardText className="mb-0">
        {`Max: ${data.main['temp_max']}°C`}
      </CardText>
      <CardText className="mb-0">
        {`Sunrise: ${moment.unix(data.sys.sunrise).utc().format('HH:mm')}`}
      </CardText>
      <CardText className="mb-0">
        {`Sunset: ${moment.unix(data.sys.sunset).utc().format('HH:mm')}`}
      </CardText>
    </CardBody>
  </Card>
);

WeatherCard.propTypes = {
  data: cityModel.isRequired,
};

export default WeatherCard;
