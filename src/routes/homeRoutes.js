const homeController = require('../controllers/homeController');
const validateSession = require('../controllers/sessionController').validateSession;

module.exports = function(app,router){
  app.get('/', homeController.login);
  app.get('/login', homeController.login);
  app.get('/signup', homeController.signup);
  app.post('/homePage', homeController.signin);
  app.get('/logout', homeController.logout);
  app.get('/clearsession',homeController.clearsession);
  app.get('/resetPassword', validateSession, homeController.resetPassword);
  app.post('/updatePassword',validateSession, homeController.UpdatePassword);
  app.post('/registerUser', homeController.registerUser);

}