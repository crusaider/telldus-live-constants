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
