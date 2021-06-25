// This file is created by egg-ts-helper@1.25.9
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportAuth = require('../../../app/service/auth');
import ExportVideo = require('../../../app/service/video');
import ExportTestIndex = require('../../../app/service/test/index');

declare module 'egg' {
  interface IService {
    auth: AutoInstanceType<typeof ExportAuth>;
    video: AutoInstanceType<typeof ExportVideo>;
    test: {
      index: AutoInstanceType<typeof ExportTestIndex>;
    }
  }
}
