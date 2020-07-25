const parseCookies = (req, res, next) => {
  if (req.headers.cookie) {
    var pairs = req.headers.cookie.split('; ');
    for (var joinedPair of pairs) {
      var pair = joinedPair.split('=');
      var [key, value] = pair;
      req.cookies[key] = value;
    }
  } else {
    req.cookies = {};
  }
  next();
};

module.exports = parseCookies;