'use strict';

/**
 *  answer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::answer.answer', ({ strapi }) => ({
    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::answer.answer', {
            ...query,
            populate: {
                answers: {
                    populate: {
                        question: {
                            populate: {
                                video: true
                            }
                        }
                    }
                },
                patient: true

            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));


// module.exports = createCoreController('api::answer.answer');
