/**
 * Created by @author jonas on 2016-11-22.
 *
 * Copyright 2016 (C) jonas
 * License: MIT
 */
'use strict';

var assert = require('assert');
var telldusLiveConstants = require('../lib');

describe('telldus-live-constants', function () {
  it('should have the constants symbols', function () {
    assert(telldusLiveConstants.COMMANDS);
    assert(telldusLiveConstants.METHODS);
    assert(telldusLiveConstants.SUPPORTED_METHODS);
  });
});
