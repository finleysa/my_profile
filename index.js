const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const favicon = require("serve-favicon");
const app = express();

app.all(/.*/, wwwredirect);
app.use(favicon(path.join(__dirname, "dist", "img", "favicon.ico")));
app.use(express.static(path.join(__dirname, "dist")));
app.set("views", path.join(__dirname, "dist"));
app.set("view engine", "html");
app.get("/", (req, res) => res.render("dist/index"));
app.get("/resume", (req, res, next) => {
  res.sendFile(path.join(__dirname, "Steven_Finley_CV.pdf"));
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

function wwwredirect(req, res, next) {
  var host = req.header("host");
  if (host.match(/^www\..*/i)) {
    next();
  } else {
    res.redirect(301, "http://www." + host + req.url);
  }
}