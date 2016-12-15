/**
 * Production environment settings
 *
 * This file can include shared settings for a production environment,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the production        *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/


  connections: {

    mysqlServer: {
      adapter: 'sails-mysql',
      user: 'root',
      password: 'root',
      database: 'sto_api',
      port:3306,
      host  : '127.0.0.1'
      //socketPath : '/tmp/mysql.sock'
    }


  },


  models: {
    connection: 'mysqlServer'
  },
  port: 80,
  LOG_QUERIES: 'true',
  hookTimeout:  40000
};
