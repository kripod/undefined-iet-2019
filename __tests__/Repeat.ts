/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

///<reference path='../resources/jest.d.ts'/>

import { Repeat } from '../';

describe('Repeat', () => {
  it('fixed repeat', () => {
    const v = Repeat('wtf', 3);
    expect(v.size).toBe(3);
    expect(v.first()).toBe('wtf');
    expect(v.rest().toArray()).toEqual(['wtf', 'wtf']);
    expect(v.last()).toBe('wtf');
    expect(v.butLast().toArray()).toEqual(['wtf', 'wtf']);
    expect(v.toArray()).toEqual(['wtf', 'wtf', 'wtf']);
    expect(v.join()).toEqual('wtf,wtf,wtf');
  });

  it('returns correct string in case of empty repeat', () => {
    const v = Repeat('', 0);
    expect(v.toString()).toBe('Repeat []');
  });

  it('returns the same object on reverse', () => {
    const v = Repeat('wtf', 3);
    expect(v.reverse()).toBe(v);
  });

  it('check if it includes a value', () => {
    const v = Repeat('wtf', 3);
    expect(v.includes('wtf')).toBe(true);
  });

  it('returns correct index (0) on indexOf if value correct', () => {
    const v = Repeat('wtf', 3);
    expect(v.indexOf('wtf')).toBe(0);
  });

  it('returns -1 on indexOf if value incorrect', () => {
    const v = Repeat('wtf', 3);
    expect(v.indexOf('asd')).toBe(-1);
  });

  it('returns correct index (seq length) on lastIndexOf if value correct', () => {
    const v = Repeat('wtf', 3);
    expect(v.lastIndexOf('wtf')).toBe(v.size);
  });

  it('returns -1 on lastIndexOf if value incorrect', () => {
    const v = Repeat('wtf', 3);
    expect(v.indexOf('asd')).toBe(-1);
  });

  it('check if two Repeat equal to each other', () => {
    const v = Repeat('wtf', 3);
    const v2 = Repeat('wtf', 3);
    expect(v.equals(v2)).toBe(true);
  });

  it('check if string format of Repeat is ok', () => {
    const v = Repeat('wtf',3);
    expect(v.toString()).toEqual("Repeat [ wtf 3 times ]");
  });
});
