var allFriends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(allFriends);
  });
  app.post("/api/friends", function(req, res) {
    let match = allFriends[0];
    res.json(match);
  });
};
