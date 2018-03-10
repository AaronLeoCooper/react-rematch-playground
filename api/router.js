const { Router } = require("express");

const { matchedRoute, getData } = require("./utils");

const { API_DELAY } = process.env;

const responseDelay = API_DELAY || 0;

const router = Router();

// disable cache for all responses
router.use((req, res, next) => {
  res
    .set({
      'Cache-Control': 'private, no-cache, no-store, must-revalidate',
      'Expires': '-1',
      'Pragma': 'no-cache'
    });

  next();
});

router.use((req, res, next) => {
  const { path, method } = req;

  if (!matchedRoute(path, method)) {
    next();
  }

  setTimeout(() => {
    const data = getData(path, method);

    res
      .status(200)
      .json(data);
  }, responseDelay);
});

router.use((req, res) => {
  res.status(404).json({ error: `${req.path} not found` });
});

module.exports = router;
