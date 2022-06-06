//const passport = require('passport');
/*
module.exports = app => {
  app.get('/login', passport.authenticate('apple'));

  app.get('/auth', function (req, res, next) {
    passport.authenticate('apple', function (err, user, info) {
      if (err) {
        if (err == 'AuthorizationError') {
          res.send(
            'Oops! Looks like you didn\'t allow the app to proceed. Please sign in again! <br /> \
                <a href="/login">Sign in with Apple</a>'
          );
        } else if (err == 'TokenError') {
          res.send(
            'Oops! Couldn\'t get a valid token from Apple\'s servers! <br /> \
                <a href="/login">Sign in with Apple</a>'
          );
        }
      } else {
        res.json(user);
      }
    })(req, res, next);
  });

  app.get('/profile', (req, res) => {
    res.send("You are a valid user")
  })

  app.get('/failed', (req, res) => {
    res.send('You are not a valid user');
  });

}*/
