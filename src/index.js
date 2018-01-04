import config from './config';

export default class Trader {
  constructor(options) {
    this.api_key = options.API_KEY || config.API_KEY;
  }
}
