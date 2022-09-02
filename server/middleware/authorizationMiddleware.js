const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "1",
  issuerBaseURL: "1",
});

const checkScopes = requiredScopes("");

module.exports = {
  checkJwt,
  checkScopes,
};
