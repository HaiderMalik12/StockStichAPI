/**
 * Created by HaiderMalik on 15/12/2016.
 */
/**
 * Account.js
 *
 * @description :: This is an account of a user who would put out jobs for candidates to apply to
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  //comment
  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: 'accounts',

  // Responsible for actually updating the 'updated_at' property.
  beforeUpdate: function (values, next) {
    values.updated_at = new Date();
    next();
  },
  // Responsible for actually adding the 'created_at' property.
  beforeCreate: function (values, next) {
    values.created_at = new Date();
    next();
  },
  attributes: {

    'first_name': {
      'type': 'string',
      'required': true
    },
    'last_name': {
      'type': 'string',
      'required': true
    },
    'email': {
      'type': 'email',
      'required': true,
      'unique': true
    },
    'password': {
      'type': 'string',
      'required': true
    },

    'mobile': {
      'type': 'string'
    },
    'city':{
      'type':'string'
    },
    'status_id': {
      'type': 'integer',
      'required': true,
      'defaultsTo': 1
    },

    created_at: {
      type: 'datetime',
      defaultsTo: function () {
        return new Date();
      }
    },
    updated_at: {
      type: 'datetime',
      defaultsTo: function () {
        return new Date();
      }
    },
    // Associations


    // Override the default toJSON method
    toJSON: function () {
      var obj = this.toObject();
      delete obj.password;
      delete obj.createdAt;
      delete obj.updatedAt;
       delete obj.created_at;
      delete obj.updated_at;

      return obj;
    }
  },
  checkPassword: function (password, user, cb) {
    require('machinepack-passwords').checkPassword({
      passwordAttempt: password,
      encryptedPassword: user.password
    }).exec({
      // An unexpected error occurred.
      error: function (err) {
        return cb(err, false);
      },
      // Password attempt does not match already-encrypted version
      incorrect: function () {
        return cb(null, false);
      },
      // OK.
      success: function () {
        return cb(null, true);
      }
    });
  }
};
