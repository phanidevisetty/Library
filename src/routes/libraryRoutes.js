const libraryController = require('../controllers/libraryController');
const validateSession = require('../controllers/sessionController').validateSession;

module.exports = function(app,router){
  app.get('/library', validateSession, libraryController.showUserbooks);
  app.get('/addbook', validateSession, libraryController.addBook)
  app.post('/insertbook', validateSession, libraryController.insertBook)
  app.get('/deletelibraryResp/:id', validateSession, libraryController.deletelibrary)
}