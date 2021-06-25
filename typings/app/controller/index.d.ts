// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportApiAuth = require('../../../app/controller/api/auth');
import ExportApiBlog = require('../../../app/controller/api/blog');
import ExportApiVideos = require('../../../app/controller/api/videos');
import ExportPageHome = require('../../../app/controller/page/home');
import ExportPageoldHome = require('../../../app/controller/pageold/home');
import ExportPageoldLogin = require('../../../app/controller/pageold/login');

declare module 'egg' {
  interface IController {
    api: {
      auth: ExportApiAuth;
      blog: ExportApiBlog;
      videos: ExportApiVideos;
    }
    page: {
      home: ExportPageHome;
    }
    pageold: {
      home: ExportPageoldHome;
      login: ExportPageoldLogin;
    }
  }
}
