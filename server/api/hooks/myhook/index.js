var snakeCaseKeys = require('snakecase-keys')

module.exports = function (sails) {

  // Declare a var that will act as a reference to this hook.
  var hook;

  return {

    initialize: function (cb) {

      return cb();
    },

    formatObject(object) {
      console.log('fuccckkkk transforma');

      return snakeCaseKeys(object);
    },

    routes: {
      after: {
        '/*': function (req, res, next) {
          //return res.json(snakeCaseKeys(res));
          console.log('fuccckkkk yea');
          return next();
        }
      }
    }
  };
};
