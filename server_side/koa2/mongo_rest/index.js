var generateRoutes = require('./routes');
var generateActions = require('./actions');

module.exports = function generateRest(app, router, model, prefix) {
  var actions = generateActions(model);
  if (prefix == null) prefix = '';

  generateRoutes(app, router, model.modelName, actions, prefix);
};