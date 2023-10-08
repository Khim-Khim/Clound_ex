const app = require("express")();
var path = require("path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.get("/", (req, res) => {
  let peopleList = getRandomList();
  res.render("index", { people: peopleList });
});
let getRandomList = () => {
  let list = ["ada", "turing", "lovelace", "neumann", "gracehopper"];
  return list.slice(4);
};
app.listen(5000);
