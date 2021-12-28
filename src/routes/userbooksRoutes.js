const userbooksController = require('../controllers/userbooksController');
const validateSession = require('../controllers/sessionController').validateSession;

module.exports = function(app,router){
  app.get('/userbooks', validateSession, userbooksController.showUserbooks);
  app.post('/insertUserbook', validateSession, userbooksController.insertUserBook)
  app.get('/adduserbook', validateSession, userbooksController.addUserbook)
  app.get('/edituserBooksdata/:id', validateSession, userbooksController.edituserBooksdata)
  app.post('/updateUserbook', validateSession, userbooksController.updateUserbook)
  app.get('/deleteuserBooksdata/:id', validateSession, userbooksController.deleteuserBooksdata)
}