const data = require("./data.json");

function setNoCache(res) {
  res.setHeader("Surrogate-Control", "no-store");
  res.setHeader(
    "Cache-Control",
    "no-store, no-cache, must-revalidate, proxy-revalidate"
  );
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
}

function matchedRoute(path, method) {
  const matchedPath = data[path];

  if (!matchedPath) {
    return false;
  }

  const matchedMethod = matchedPath.methods.includes(method);

  return Boolean(matchedMethod);
}

function getData(path, method) {
  return data[path].data;
}

module.exports = {
  setNoCache,
  matchedRoute,
  getData
};
