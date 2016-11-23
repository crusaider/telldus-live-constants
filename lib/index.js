/**
 * Created by @author jonas on 2016-11-22.
 *
 * Copyright 2016 (C) jonas
 * License: MIT
 */
'use strict';

let constants = {
  COMMANDS: {
    on: 0x0001,
    off: 0x0002,
    bell: 0x0004,
    dim: 0x0010,
    up: 0x0080,
    down: 0x0100
  },
  METHODS: {
    0x0001: 'on',
    0x0002: 'off',
    0x0004: 'bell',
    0x0010: 'dim',
    0x0080: 'up',
    0x0100: 'down'
  }
};
constants.SUPPORTED_METHODS = Object.keys(constants.COMMANDS)
  .reduce(function (previous, key) {
    return previous + constants.COMMANDS[key];
  }, 0);

module.exports = constants;
