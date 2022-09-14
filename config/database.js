// module.exports = ({ env }) => ({
//   connection: {
//     client: 'mysql',
//     connection: {
//       host: env('DATABASE_HOST', 'localhost'),
//       port: env.int('DATABASE_PORT', 3306),
//       database: env('DATABASE_NAME', 'homeo'),
//       user: env('DATABASE_USERNAME', 'homeo'),
//       password: env('DATABASE_PASSWORD', 'WCZ3767nJ3kSjmfW'),
//       ssl: env.bool('DATABASE_SSL', false),
//     },
//   },
// });

// CREATE USER 'homo_homeo'@'localhost' IDENTIFIED BY 'P@s$w0rd123!';
// CREATE DATABASE homo_homeo;
// GRANT PRIVILEGE ON homo_homeo.table TO 'homo_homeo'@'localhost';

// GRANT ALL PRIVILEGES ON *.* TO 'homo_homeo'@'localhost' IDENTIFIED BY 'P@s$w0rd123!';

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'homo_homeo'),
      user: env('DATABASE_USERNAME', 'homo_homeo'),
      password: env('DATABASE_PASSWORD', 'P@s$w0rd123!'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});


// database: env('DATABASE_NAME', 'home_api'),
//       user: env('DATABASE_USERNAME', 'home_api'),
//       password: env('DATABASE_PASSWORD', 'jBo2ifMDKtNq@Dzp'),