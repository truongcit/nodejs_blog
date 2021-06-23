const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,'public')));

app.use(morgan("combined")); // dua ra ban log HTTP

//emplate engine
app.engine("hbs", handlebars({ 
  extname: ".hbs" 
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// dua ra man hinh
// console.log('PATH: ',__dirname,'resources','views')
app.get("/", (req, res) => {
  res.render("home"); // trỏ đến thư mục home
});
app.get("/new", (req, res) => {
  res.render("new"); // trỏ đến thư mục home
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
