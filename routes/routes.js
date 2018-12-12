const userCredential = require("./user_credential");

module.exports = (app, db) => {
  app.get('/', (req, res) => {
    res.send("index.");
  });

  userCredential(app, db);
}