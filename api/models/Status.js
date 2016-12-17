/**
 * Status.js
 *
 * @description :: Generic statuses
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  DELETED: 4,

  // For account
  ACTIVE: 16,
  INACTIVE: 17,


  autoCreatedAt: false,
  autoUpdatedAt: false,
  tableName: 'statuses',

  // Responsible for actually updating the 'updated_at' property.
  beforeUpdate: function(values,next) {
    values.updated_at = new Date();
    next();
  },
  // Responsible for actually adding the 'created_at' property.
  beforeCreate: function(values,next) {
    values.created_at = new Date();
    next();
  },

  attributes: {
    name: {
      type: 'string'
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
    'status_id': {
      'type': 'integer',
      'required': true,
      'defaultsTo': 2
    }
  }
};

