var allFriends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    res.json(allFriends);
  });
  app.get("/api/match", function(req, res) {
    let match = allFriends[0];
    res.json(match);
  });
};
