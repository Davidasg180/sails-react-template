const jwt = require('jsonwebtoken');
module.exports = {
  friendlyName: 'Signup',
  description: 'Sign up for a new user account.',
  extendedDescription:
    `This creates a new user record in the database, signs in the requesting user agent
    by modifying its [session](https://sailsjs.com/documentation/concepts/sessions), and
    (if emailing with Mailgun is enabled) sends an account verification email.

    If a verification email is sent, the new user's account is put in an "unconfirmed" state
    until they confirm they are using a legitimate email address (by clicking the link in
    the account verification message.)`,

  inputs: {
    emailAddress: {
      required: true,
      type: 'string',
      isEmail: true,
      description: 'The email address for the new account, e.g. m@example.com.',
      extendedDescription: 'Must be a valid email address.',
    },
    password: {
      required: true,
      type: 'string',
      maxLength: 200,
      example: 'thisIsASecurePassword123',
      description: 'The unencrypted password to use for the new account.'
    },
    fullName: {
      required: true,
      type: 'string',
      example: 'Frida Kahlo de Rivera',
      description: 'The user\'s full name.',
    }
  },
  exits: {
    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request ' +
        'parameters should have been validated/coerced _before_ they were sent.'
    },
    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },
  },
  fn: async function (inputs, exits) {

    var newEmailAddress = inputs.emailAddress.toLowerCase();
    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    var newUserRecord = await User.create(Object.assign({
      emailAddress: newEmailAddress,
      password: await sails.helpers.passwords.hashPassword(inputs.password),
      fullName: inputs.fullName,
    }, {}))
      .intercept('E_UNIQUE', 'emailAlreadyInUse')
      .intercept({ name: 'UsageError' }, 'invalid')
      .fetch();

    // Store the user's new id in their session.
    this.req.session.userId = newUserRecord.id;
    sails.log.info('Skipping new account email verification... (since `verifyEmailAddresses` is disabled)');
    // Since everything went ok, send our 200 response.
    var token = jwt.sign({ user:newUserRecord.id }, sails.config.jwtSecret, { expiresIn: sails.config.jwtExpires })
    return exits.success({ token });

  }

};
