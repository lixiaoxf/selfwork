'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/index');
  router.get('/index', controller.page.pc.index);
  router.get('/aboutus', controller.page.pc.aboutUs);
  router.get('/growthventures', controller.page.pc.growthVentures);
  router.get('/hedgefunds', controller.page.pc.hedgeFunds);
  router.get('/news', controller.page.pc.news);
  // router.get('/add',controller.page.home.addBlog)
  // router.get('/edit/:id', controller.page.home.edit);
  // router.get('/new', controller.page.home.createBlog);
  // router.get('/detail/:id', controller.page.home.detail);
  // router.get('/admin/login', controller.page.login.index);
  // router.get('/register', controller.page.login.register);
};