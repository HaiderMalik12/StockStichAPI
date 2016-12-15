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
     
   
    //pick all the valid fields
    let validParams = ['first_name', 'last_name', 'email', 'password',
                       'city', 'mobile', 'section_label'];

    //Get only validParams
    let params  = _.pick(req.body, validParams),
        firstName  = params.first_name,
        lastName = params.last_name,
        email = params.email,
        password = params.password,
        city = params.city,
        mobile = params.mobile;

   //if first_name is not provided send badRequest error
   if(!firstName) return res.badRequest({err:'Invalid first_name'});

   //if last_name is not provided send badRequest error
    if(!lastName) return res.badRequest({err:'Invalid last_name'});

   //if email is not provided send badRequest error
   if(!email) return res.badRequest({err:'Invalid email'});
   // if email is not valid send badRequest error

   //if mobile is not provided send badRequest error

   //if city is not provided send badRequest error

   // if password is not provided send badRequest error

  // encrypt the password using machinepack call the encrypt password method

   //save data in account 

   //return new account back.
 return res.ok(params);
 

    }

}