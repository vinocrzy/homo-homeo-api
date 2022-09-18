const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
    options: {
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});



// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'homo_homeo'),
//       user: env('DATABASE_USERNAME', 'root'),
//       password: env('DATABASE_PASSWORD', ''),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });


// database: env('DATABASE_NAME', 'home_api'),
//       user: env('DATABASE_USERNAME', 'home_api'),
//       password: env('DATABASE_PASSWORD', 'jBo2ifMDKtNq@Dzp'),