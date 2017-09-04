const admin = require('firebase-admin')

module.exports = function(req, res) {
  // Verify the user provided a phone
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input'});
  }

  //Format the phone number to remove dashses, parens, spaces
  const phone = String(req.body.phone).replace(/[^\d]/g, "");
  //Anything not a digit becomes an empty string

  //Create a new user account using that phone number
  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ error: err }));
  //Access admin, access server module
  //uid is userid

  //Respond to the user request, saying the accoutn was made

}
