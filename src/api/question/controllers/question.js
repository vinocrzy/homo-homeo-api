'use strict';

/**
 *  question controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::question.question', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::question.question', {
            ...query,
            populate: {

                video: true

            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));



