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

        const answers = await strapi.db.query('api::answer.answer').findOne({
            where: { patient: id },
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
                patient: true
            },
        });

        const entity = await strapi.entityService.findOne('api::patient.patient', id, {
            ...query
        });
        const sanitizedEntity = await this.sanitizeOutput({ ...entity, answers }, ctx);

        return this.transformResponse(sanitizedEntity);

    }
}));
