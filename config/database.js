module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'home_homeo'),
      user: env('DATABASE_USERNAME', 'home_homeo'),
      password: env('DATABASE_PASSWORD', 'JfZ3cBaRmRtZyBRD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
