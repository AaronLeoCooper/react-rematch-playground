const { Router } = require("express");

const { matchedRoute, getData } = require("./utils");

const { API_DELAY } = process.env;

const responseDelay = API_DELAY || 0;

const router = Router();

router.use((req, res, next) => {
  const { path, method } = req;

  if (!matchedRoute(path, method)) {
    next();
  }

  setTimeout(() => {
    const jsonData = getData(path, method);

    res.status(200).json(jsonData);
  }, responseDelay);
});

router.use((req, res) => {
  res.status(404).json({ error: `${req.path} not found` });
});

module.exports = router;
