module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'fast_homo_homeo'),
      user: env('DATABASE_USERNAME', 'fast_homo_homeo'),
      password: env('DATABASE_PASSWORD', '+bsCgmy1a4o!w#rq'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});


// connection: {
//   host: env('DATABASE_HOST', 'fastoxtechnologies.com'),
//   port: env.int('DATABASE_PORT', 3306),
//   database: env('DATABASE_NAME', 'fast_homo_homeo'),
//   user: env('DATABASE_USERNAME', 'fast_homo_homeo'),
//   password: env('DATABASE_PASSWORD', '*pND1zymsb^LgGP2'),
//   ssl: env.bool('DATABASE_SSL', false),
// },
