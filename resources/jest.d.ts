/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// Allow importing jasmine-check
declare module 'jasmine-check' {
  export function install(global?: any): void;
}
declare var check: any;
declare var gen: any;
