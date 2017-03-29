"use strict";

const utils = require("utils");
const variants = require("../../lib/variants");

module.exports.handler = function(event, context, callback) {

  const request = event.Records[0].cf.request;

  let headers = request.headers;

  /*
    -- EVENT: cloudfront viewer request
    -- lambda that can preset all variations for a customer
    -- this is the only lambda that requires redeployment for a test to become active
    -- basically allows to be the single point of defining possible variants
    -- or currently running variants
  */

  // @TODO - useless until you can access response.body 

  // HAVE to figure out if want to cache based on headers/cookies/query string
  // looks like QS is most robust for all origin types, since S3 doesn't play with headers
  // nor with 



  callback(null, request);
}

// END