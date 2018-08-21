
var allFriends = require('../data/friends.js');
module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });
    app.post('/api/friends', function(req, res) {
        var friendName = '';
        var friendPhoto = '';
        allFriends.forEach(function(friend) {
            var matchScore = [];
            var totalDiff = 0;
            for (var i = 0; i < friend.scores.length; i++) {
                matchScore.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friend.scores[i])));
            }
            totalDiff = matchScore.reduce();
            if (totalDiff < 40) {
                friendName = friend.name;
                friendPhoto = friend.photo;
				diff = totalDiff;
            }
        });
        res.json({
            name: friendName,
            photo: friendPhoto
        });
        friends.push(req.body);
    });
}