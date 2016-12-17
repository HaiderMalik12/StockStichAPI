module.exports = {

  /**
   * This routine will find a company on the base of user id
   * if company found it will generate a jwt token and generate
   * response.
   * @param inUser
   * @return {object} promise - promise with response message
   */
  getTokenWithComp: function (inUser,inRemember) {

    return new sails.bluebird((resolve, reject) => {


      //find the comapny status_id not equal to DELETED
      Company
        .findOne({
          account: inUser.id,
          status_id: {'!': Status.DELETED}
        })
        .then(company => {

          if (!company) return reject({err: 'No Company Found'});

          //if Company found then generate a jwttoken

          // generate a response message and send back to user
          let tokenExpiry = !inRemember || inRemember == 'false' ? '1 day' : '7 days';

          let rsp = {
            user: inUser,
            comapny: company,
            token: jwToken.issue({
              id: inUser.id,
              originalCompany: company,
              company: company.id
            }, tokenExpiry)
          };

          return resolve(rsp);

        }).catch(err=> {
          throw 'Unable to find Company';
      });
    });
  },

  /**
   * This routine will generate token with user ,also
   * generate response message with user
   * @param inUser
   * @param inRemember
   * @return {object} - Promise
   */
  getToken:function (inUser,inRemember) {

    return new sails.bluebird((resolve, reject) => {

      // generate a response message and send back to user
      let tokenExpiry = !inRemember || inRemember == 'false' ? '1 day' : '7 days';

      let rsp = {
        user: inUser,
        token: jwToken.issue({
          id: inUser.id
        }, tokenExpiry)
      };

      return resolve(rsp);


    });
  }
}
