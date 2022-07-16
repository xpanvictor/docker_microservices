const redis = require('redis');

const Redis = redis.createClient();

// Redis to fix

exports.save = function (choice) {
  if (Redis.exists(choice)) {
    Redis.incr(choice);
  } else {
    Redis.set(choice, -1);
  }
  return true;
};

exports.get = function () {
  async.parallel([Redis.get('space'), Redis.get('tab')]).then((data) => data);
};
