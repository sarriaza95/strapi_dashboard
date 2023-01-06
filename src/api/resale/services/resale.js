'use strict';

/**
 * resale service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resale.resale');
