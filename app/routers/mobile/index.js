'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/m/', '/m/index');
  router.get('/m/index', controller.page.mobile.index);
  router.get('/m/aboutus', controller.page.mobile.aboutUs);
  router.get('/m/growthventures', controller.page.mobile.growthVentures);
  router.get('/m/hedgefunds', controller.page.mobile.hedgeFunds);
  router.get('/m/news', controller.page.mobile.news);
};