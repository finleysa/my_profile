const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, "dist")))
app.set("views", path.join(__dirname, "dist"))
app.set("view engine", "html")
app.get("/", (req, res) => res.render("dist/index"))
app.get("/resume", (req, res, next) => {
  res.sendFile(path.join(__dirname, 'Steven_Finley_CV.pdf'));
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));