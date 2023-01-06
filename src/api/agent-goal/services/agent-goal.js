'use strict';

/**
 * agent-goal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::agent-goal.agent-goal');
