'use strict';

/**
 *  patient controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::patient.patient');

module.exports = createCoreController('api::patient.patient', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;

        const entity = await strapi.entityService.findOne('api::patient.patient', id, {
            ...query,
            populate: {
                answer: {
                    populate: {
                        answers: {
                            populate: {
                                question: {
                                    populate: {
                                        video: true
                                    }
                                },
                                ans_text: true,
                                ans_audio: true,
                                ans_video: true,

                            }
                        },
                    },
                }
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));
