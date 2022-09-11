module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'homeo'),
      user: env('DATABASE_USERNAME', 'homeo'),
      password: env('DATABASE_PASSWORD', 'WCZ3767nJ3kSjmfW'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});


// database: env('DATABASE_NAME', 'home_api'),
//       user: env('DATABASE_USERNAME', 'home_api'),
//       password: env('DATABASE_PASSWORD', 'jBo2ifMDKtNq@Dzp'),