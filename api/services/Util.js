  "use strict";
  const validator = require("email-validator");


module.exports.getMyEncryptedPassword = function (password, callback) {

  var passwordReg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9\.\-\_\!]+){6,15}$/g;

  if (!passwordReg.test(password)) {
    return callback({err:'Password must contain at least one digit and be between 6 and 15 characters long.'},null);
  } else if (password.length < 6 || password.length > 15) {
    return callback({err:'Password must be in between 6 and 15 characters'},null);
  }

  require('machinepack-passwords').encryptPassword({
    password: password
  }).exec({
    error: function (err) {
      // req.wantsJSON = true;
      if (!password) {
        return callback('Missing password field', null);
      }
      return res.negotiate(err);
    },
    success: function (encryptedPassword) {
      return callback(null, encryptedPassword);
    }
  });
};

//validate email
module.exports.emailValidator = {

  validate: function (email) {
    return validator.validate(email) ? true : false;
  }
};
