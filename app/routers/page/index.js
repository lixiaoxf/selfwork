'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/index');
  router.get('/index', controller.page.home.index);
  router.get('/aboutus', controller.page.home.aboutUs);
  router.get('/growthvenbtures', controller.page.home.growthVenbtures);
  router.get('/hedgefunds', controller.page.home.hedgeFunds);
  router.get('/news', controller.page.home.news);
  // router.get('/add',controller.page.home.addBlog)
  // router.get('/edit/:id', controller.page.home.edit);
  // router.get('/new', controller.page.home.createBlog);
  // router.get('/detail/:id', controller.page.home.detail);
  // router.get('/admin/login', controller.page.login.index);
  // router.get('/register', controller.page.login.register);
};