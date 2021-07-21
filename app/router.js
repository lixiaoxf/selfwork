'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./routers/pc')(app)
  require('./routers/mobile')(app)
  require('./routers/api')(app)
};
