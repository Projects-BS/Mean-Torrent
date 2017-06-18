'use strict';

/**
 * Module dependencies
 */
var messagesPolicy = require('../policies/messages.server.policy'),
  messages = require('../controllers/messages.server.controller');

module.exports = function (app) {
  app.route('/api/messages').all(messagesPolicy.isAllowed)
    .get(messages.list)
    .post(messages.create)
    .delete(messages.delete);

  app.route('/api/messages/:messageId').all(messagesPolicy.isAllowed)
    .delete(messages.delete)
    .post(messages.createReply);

  app.param('messageId', messages.messageByID);
};