'use strict';

/**
 * sales-agent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sales-agent.sales-agent');
