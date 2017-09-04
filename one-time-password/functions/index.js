const admin = require('firebase-admin')
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json'); //.gitignore
const requestOneTimePassword = require('./request_one_time_password')
const verifyOneTimePassword = require('./verify_one_time_password')
//I have mine on .gitignore for security purposes

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://one-time-p-19960.firebaseio.com'
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword);
exports.verifyOneTimePassword = functions.https.onRequest(verifyOneTimePassword);
