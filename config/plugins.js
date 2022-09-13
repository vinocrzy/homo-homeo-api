
var AWS = require("aws-sdk");
// module.exports = ({ env }) => ({
//     // ...
//     upload: {
//         config: {
//             provider: 'local',
//             providerOptions: {
//                 sizeLimit: 100000,
//             },
//         },
//     },
//     // ...
// });

module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: 'aws-s3',
            providerOptions: {
                region: env('AWS_REGION'),
                endpoint: env('AWS_ENDPOINT'),
                sslEnabled: true,
                s3ForcePathStyle: false,
                params: {
                    Bucket: env('AWS_BUCKET'),
                    ACL: 'public-read',
                },
                credentials: new AWS.Credentials({
                    accessKeyId: env('AWS_ACCESS_KEY_ID'),
                    secretAccessKey: env('AWS_ACCESS_SECRET'),
                }),
            },
            actionOptions: {
                upload: {},
                uploadStream: {},
                delete: {},
            },

            // provider: 'cloudinary',
            // providerOptions: {
            //     cloud_name: env('CLOUDINARY_NAME'),
            //     api_key: env('CLOUDINARY_KEY'),
            //     api_secret: env('CLOUDINARY_SECRET'),
            // },
            // actionOptions: {
            //     upload: {},
            //     uploadStream: {},
            //     delete: {},
            // },

        },
    },
    // ...
});