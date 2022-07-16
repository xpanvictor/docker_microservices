const manager = require('./manager');

exports.vote = function (req, res) {
  if (manager.save('space')) {
    res.send(manager.get);
  }
};
