/**
 * 403 (Forbidden) Handler
 *
 * Usage:
 * return res.forbidden();
 * return res.forbidden(err);
 * return res.forbidden(err, 'some/specific/forbidden/view');
 *
 * e.g.:
 * ```
 * return res.forbidden('Access denied.');
 * ```
 */

module.exports = function forbidden(data, options) {

    // Get access to `req`, `res`, & `sails`
    var req = this.req;
    var res = this.res;
    var sails = req._sails;

    // Set status code
    res.status(403);

    if(!_.isUndefined(data.error)){
        data.err = data.error;
        delete data.error;
    }

    if(typeof data == 'string')
        data = {err: data};

    // Log error to console
    if (data !== undefined) {
        sails.log.verbose('Sending 403 ("Forbidden") response: \n', data);
    } else {
        sails.log.verbose('Sending 403 ("Forbidden") response');
    }

    // Only include errors in response if application environment
    // is not set to 'production'.  In production, we shouldn't
    // send back any identifying information about errors.
    //if (sails.config.environment === 'production') {
    //    data = undefined;
    //}

    // Serve data as JSON(P) if appropriate
    if (req.param('callback')) {
        return res.jsonp(data);
    } else {
        return res.json(data);
    }
};

