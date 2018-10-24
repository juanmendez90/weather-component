import axios from 'axios';
import queryString from 'query-string';

const processConfig = (config) => {

  let _config = {
    ...config,
    paramsSerializer: params => `${queryString.stringify(params)}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`,
  }

  return _config;
};

class Api {
  static _instance = new Api();

  // store = null;

  static getInstance() {
    return Api._instance;
  }

  constructor() {
    if (Api._instance) {
      throw new Error('Instantiation failed: use Api.getInstance() instead of new.');
    }
  }

  get(url, config) {
    return new Promise((resolve, reject) => {
      axios.get(this.getUrl(url), processConfig(config))
        .then(({data}) => resolve(data))
        .catch((error) => {
          return reject(error);
        });
    });
  }

  getUrl = url => process.env.REACT_APP_API_URL + url;

}

export default Api.getInstance();
