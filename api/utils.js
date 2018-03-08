const data = require("./data.json");

function matchedRoute(path, method) {
  const matchedPath = data[path];

  if (!matchedPath) {
    return false;
  }

  const matchedMethod = matchedPath[method];

  return Boolean(matchedMethod);
}

function getData(path, method) {
  return data[path][method];
}

module.exports = { matchedRoute, getData };
