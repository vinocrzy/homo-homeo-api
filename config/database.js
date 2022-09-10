module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'holi_holisticdb'),
      user: env('DATABASE_USERNAME', 'holi_holisticdb'),
      password: env('DATABASE_PASSWORD', '+koKnD68Dlhkd+vI'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});


// database: env('DATABASE_NAME', 'home_api'),
//       user: env('DATABASE_USERNAME', 'home_api'),
//       password: env('DATABASE_PASSWORD', 'jBo2ifMDKtNq@Dzp'),