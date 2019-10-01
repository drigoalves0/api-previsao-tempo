import OAuth from 'oauth';

require('dotenv/config');

const { APP_ID } = process.env;
class Api {
  static async teste(city, res) {
    const header = {
      'X-Yahoo-App-Id': APP_ID,
    };
    const request = new OAuth.OAuth(
      null,
      null,
      'dj0yJmk9RTRQbmo1d3Fnb1pVJmQ9WVdrOWExaFVjMHQwTmpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTZm',
      '564f046d0e8a565fab3841426f39aecd3ffeda0a',
      '1.0',
      null,
      'HMAC-SHA1',
      null,
      header
    );

    await request.get(
      `https://weather-ydn-yql.media.yahoo.com/forecastrss?location=${city},br&format=json`,
      null,
      null,
      (error, data) => {
        if (error) {
          return res.json(JSON.parse(error));
        }
        return res.json(JSON.parse(data));
      }
    );
  }
}
export default Api;
