const { Router } = require('express');

let router = new Router();

router.get('/', (_, res) => {
  res.redirect('/index.html');
});

router.get('/styles/:name', (req, res) => {
  let name = req.params.name;
  res.redirect(`http://0.0.0.0:5000/styles/${name}`);
});

router.get('/scores', (_, res) => {
  res.json({ spaces: 2, tabs: 5 });
});

module.exports = router;
