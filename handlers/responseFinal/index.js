"use strict";

const utils = require("utils");
const variants = require("../../lib/variants");

module.exports.handler = function(event, context, callback) {

  const request = event.Records[0].cf.request;

  let headers = request.headers;

  // things like CSRF headers/cookies or other
  // things like variant utm params etc



  callback(null, request);
}

// END