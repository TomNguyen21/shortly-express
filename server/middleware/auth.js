const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // if no cookie
  if (!req.headers.cookie) {
    // use models.Sessions.create to create a session row
    models.Sessions.create()
    // then, we use insertId to get unique hash
    .then((response) => console.log(response));
    // then, add unique hash to response header
    // then, if user data exists
      // retrieve user id
      // then, add user data to session object on the request
      // add user id to session table for current session
      // then next?
  } // otherwise
      // stuff to do if there is a cookie
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

