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
  tableName: 'companies',

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

    'status_id': {
            'type': 'integer',
            'required': true,
            'defaultsTo': 2
        },
        'name': {
            'type': 'string',
            'required': true
        },
        'description': {
            'type': 'string'
        },
        'telephone': {
            'type': 'string'
        },
        'building_no': {
            'type': 'string'
        },
        'address': {
            'type': 'string'
        },
        'town': {
            'type': 'string'
        },
        'postcode': {
            'type': 'string'
        },
        created_at: {
            'type': 'datetime',
            'defaultsTo': function () {
                return new Date();
            }
        },
        updated_at: {
            'type': 'datetime',
            'defaultsTo': function () {
                return new Date();
            }
        },
    // Associations
     account:{
       model:'account',
       columnName:'account_id' 
     },

    // Override the default toJSON method
    toJSON: function () {
      var obj = this.toObject();
      delete obj.createdAt;
      delete obj.updatedAt;

      return obj;
    }
  }
};
