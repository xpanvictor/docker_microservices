exports.greet = function greet(req, res) {
  res.send('Hello world');
};

exports.vote = function vote(req, res) {
  let choice = 'a';

  // save choice

  res.json({ choice });
};
