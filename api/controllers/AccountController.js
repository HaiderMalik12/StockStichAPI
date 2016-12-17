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
      InFirstName= params.first_name,
      InLastName= params.last_name,
      InEmail = params.email,
      InPassword = params.password,
      InCity = params.city,
      InMobile = params.mobile;

    //if first_name is not provided send badRequest error
    if (!InFirstName) return res.badRequest({ err: 'Invalid first_name' });

    //if last_name is not provided send badRequest error
    if (!InLastName) return res.badRequest({ err: 'Invalid last_name' });

    //if email is not provided send badRequest error
    if (!InEmail) return res.badRequest({ err: 'Invalid email' });

    // if email is not valid send badRequest error
    if (!Util.emailValidator.validate(InEmail)) return res.badRequest({ err: 'Invalid email' });

    //if InMobile is not provided send badRequest error
    if (!InMobile) return res.badRequest({ err: 'Invalid InMobile' });

    //if city is not provided send badRequest error
    if (!InCity) return res.badRequest({ err: 'Invalid city' });

    // if password is not provided send badRequest error
    if (!InPassword) return res.badRequest({ err: 'Invalid password' });


    // encrypt the password using machinepack call the encrypt password method
    Util.getMyEncryptedPassword(InPassword, (err, encryptedPass) => {

      if (err) return res.badRequest({ err: 'Password must contain at least one digit and be between 6 and 15 characters long.' });

      if (!encryptedPass) return res.badRequest({ err: 'Password must contain at least one digit and be between 6 and 15 characters long.' });


      //save data in account
      Account.create({
        first_name: InFirstName,
        last_name: InLastName,
        email: InEmail,
        password: encryptedPass,
        mobile: InMobile,
        city: InCity
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
  login:function (req,res) {


  }

}
