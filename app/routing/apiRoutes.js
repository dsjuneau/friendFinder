var allFriends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    res.json(allFriends);
  });
  app.get("/api/match", function(req, res) {
    res.json(match);
  });
};
