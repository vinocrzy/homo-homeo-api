const strapi = require('@strapi/strapi');

strapi().start();

// if (process.env.NODE_ENV == "development")
//     strapi({ "autoReload": { "enabled": true } }).start();
// else
//     strapi().start();