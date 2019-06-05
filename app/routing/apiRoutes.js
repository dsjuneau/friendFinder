var allFriends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(allFriends);
  });
  app.post("/api/friends", function(req, res) {
    let lowestIndex = 0;
    let currentScore = Infinity;
    function calScore(arr1, arr2) {
      let score = 0;
      for (let i = 0; i < arr1.length; i++) {
        score = score + Math.abs(arr1[i] - parseInt(arr2[i]));
      }
      return score;
    }
    for (let i = 0; i < allFriends.length; i++) {
      if (calScore(allFriends[i].scores, req.body.scores) < currentScore) {
        lowestIndex = i;
        currentScore = calScore(allFriends[i].scores, req.body.scores);
      }
    }

    res.json(allFriends[lowestIndex]);
  });
};
