module.exports = {

  /**
   * This routine will create a new account for user.
   * User will have to create new account before checkout the process
   *
   * @param  {object} req
   * @param  {object} res
   * @return {object} msg - your account has been created successfully!
   */
  signup: function (req, res) {


    let validParams = ['first_name', 'last_name', 'email', 'password',
      'city', 'mobile', 'section_label'];

    //Get only validParams
    let params = _.pick(req.body, validParams),
      inFirstName = params.first_name,
      inLastName = params.last_name,
      inEmail = params.email,
      inPassword = params.password,
      inCity = params.city,
      inMobile = params.mobile;

    //if first_name is not provided send badRequest error
    if (!inFirstName) return res.badRequest({err: 'Invalid first_name'});

    //if last_name is not provided send badRequest error
    if (!inLastName) return res.badRequest({err: 'Invalid last_name'});

    //if email is not provided send badRequest error
    if (!inEmail) return res.badRequest({err: 'Invalid email'});

    // if email is not valid send badRequest error
    if (!Util.emailValidator.validate(inEmail)) return res.badRequest({err: 'Invalid email'});

    //if InMobile is not provided send badRequest error
    if (!inMobile) return res.badRequest({err: 'Invalid InMobile'});

    //if city is not provided send badRequest error
    if (!inCity) return res.badRequest({err: 'Invalid city'});

    // if password is not provided send badRequest error
    if (!inPassword) return res.badRequest({err: 'Invalid password'});


    // encrypt the password using machinepack call the encrypt password method
    Util.getMyEncryptedPassword(inPassword, (err, encryptedPass) => {

      if (err) return res.badRequest({err: 'Password must contain at least one digit and be between 6 and 15 characters long.'});

      if (!encryptedPass) return res.badRequest({err: 'Password must contain at least one digit and be between 6 and 15 characters long.'});


      //save data in account
      Account.create({
        first_name: inFirstName,
        last_name: inLastName,
        email: inEmail,
        password: encryptedPass,
        mobile: inMobile,
        city: inCity
      })
        .then(res.ok)
        .catch(res.negotiate);


    });
  },

  /**
   * This routine will handle the login process.
   * Company can login to his account to add products to customer
   * User must have logged in to his account to purchase products
   * @param req
   * @param res
   * @return {*}
   */
  login: function (req, res) {

    let validParams = ['email', 'password'];

    //Get only validParams
    let params = _.pick(req.body, validParams),
      inEmail = params.email,
      inPassword = params.password;


    if (!inEmail) return res.badRequest({err: 'Invalid email'});

    if (!inPassword) return res.badRequest({err: 'Invalid password'});


    //make sure email is valid
    if (!(Util.emailValidator.validate(inEmail))) {
      return res.badRequest({error: 'Email is not valid'});
    }

    Account.findOne({
      email: inEmail,
      status_id: {'!': Status.DELETED}
    }).exec((err, user) => {

      if (!user) {
        return res.unauthorized({err: 'Invalid email or password'});
      }

      Company
        .findOne({account:user.id})
        .then(company => {

       if(!company) return res.unauthorized({err: 'Your company is not registered'});

      Account.checkPassword(inPassword, user, function (err, valid) {

        if (err) {
          return res.unauthorized({err: 'Invalid email or password'});
        }

        if (!valid) {
          return res.unauthorized({err: 'Invalid email or password'});
        }
        else {


          let tokenExpiry = !req.param('remember') || req.param('remember') == 'false' ? '1 day' : '7 days';

          let rsp = {
            user: user,
            token: jwToken.issue({
              id: user.id,
              originalCompany: company,
              company: company.id
            }, tokenExpiry)
          };


          res.ok(rsp);


        }
      });

        }).catch()
    });

  }

}
