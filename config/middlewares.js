module.exports = [
  'strapi::errors',
  // {
  //   name: 'strapi::security',
  //   config: {
  //     contentSecurityPolicy: {
  //       useDefaults: true,
  //       directives: {
  //         'connect-src': ["'self'", 'https:'],
  //         'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
  //         'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', 'res.cloudinary.com'],
  //         upgradeInsecureRequests: null,
  //       },
  //     },
  //   },
  // },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'ap-south-1.linodeobjects.com',
            'home-homeo.ap-south-1.linodeobjects.com'
          ],
          'media-src': [
            "'self'",
            'data:',
            'blob:',
            'dl.airtable.com',
            'ap-south-1.linodeobjects.com',
            'home-homeo.ap-south-1.linodeobjects.com'
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
