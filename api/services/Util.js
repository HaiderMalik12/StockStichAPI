module.exports.getEncryptedPassword = function (password, cb) {

  var passwordReg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9\.\-\_\!]+){6,15}$/g;

  if (!passwordReg.test(password)) {
    return cb(false, 'Password must contain at least one digit and be between 6 and 15 characters long.');
  } else if (password.length < 6 || password.length > 15) {
    return cb(false, 'Password must be in between 6 and 15 characters');
  }

  require('machinepack-passwords').encryptPassword({
    password: password
  }).exec({
    error: function (err) {
      req.wantsJSON = true;
      if (!password) {
        //return res.badRequest('Missing password field');
        return cb(false, 'Missing password field');
      }
      return cb(false, err);
    },
    success: cb
  });
};