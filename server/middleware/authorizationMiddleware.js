const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

const checkJwt = auth({
  audience: "https://catcouture.co.nz",
  issuerBaseURL: "https://dev-8sarvpl3.us.auth0.com/",
});

const checkScopes = requiredScopes("");

module.exports = {
  checkJwt,
  checkScopes,
};
