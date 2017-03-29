"use strict";

const utils = require("utils");
const variants = require("../../lib/variants");

module.exports.handler = function(event, context, callback) {

  const response = event.Records[0].cf.response;
// {
//     "Records":[
//           {
//               "cf": {
//                   "config": {
//                       "distributionId": "EDFDVBD6EXAMPLE "
//                   },
//                   "response": {
//                       "status": "200",
//                       "statusDescription": "HTTP OK",
//                       "httpVersion": "2.0",
//                       "headers": {
//                           "User-agent": [ "mozilla", "safari" ],
//                           "Vary": [ "*" ]
//                       },
//                   }
//               }
//           }
//       ]
//   }

/*

  
-- open block defines which variables to care about
-- cases use a direct string match so no interpolation concerns
-- no function execution concerns etc

-- simple function that reads cookie to get the possible options
-- then with those calculates the key for a given switch

-- yes can nest switches but not for the same switch keys

-- EVENT: cloudfront viewer request
-- lambda that can preset all variations for a customer
-- this is the only lambda that requires redeployment for a test to become active
-- basically allows to be the single point of defining possible variants
-- or currently running variants



-- EVENT: cloudfront origin response
-- just calculates and sets the variant key




<{([ #switch a,b,c ])}>
<{([ case a2,b2 ])}>
<{([ case a1 ])}>
<{([ case b2 ])}>
<{([ case ])}>
<{([ /switch a,b,c ])}>




::ab:switch=abc::
::ab:case=a1b1c2::

::ab:case=a2::

::ab:case=a3::

::ab:default::


::ab:switch=abc::






{{#switch abc}}

{{case a1b1c2}}

{{case a2}}

{{case a3}}

{{case}}


{{/switch abc}}


*/

// @TODO: useless until you can access response.body and READ what was there
        // more than just being able to set it

var compressedContent = zlib.gzipSync(content);

const ret = {
  status: '200',
  statusDescription: 'HTTP OK',
  httpVersion: response.httpVersion,
  headers: Object.assign(response.headers, {

  }),
  body: compressedContent.toString('utf8'),
};

callback(null, response);

}

// END