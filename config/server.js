module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  emitErrors: true,
  app: {
    keys: env.array('APP_KEYS', ["hitfGTDSVSZe29EtkcXQCQ==", "MPsHT4JoXZR61MC+mqVNsg=="]),
  },
  url: env('MY_HEROKU_URL'),
});
