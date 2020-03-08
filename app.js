// Import of main modules
const path = require("path")
const express = require("express")
const app = express()
const ejs = require("ejs")
const pageInfo = require("./pageInfo")

const stack = require("./stack");
app.locals.stack = stack; // to make stack accessible for views

const projects = require("./projects");
app.locals.projects = projects; // to make projects accessible for views

// ejs setup
app.set("view engine", "ejs")

const moment = require("moment") // Import of moment module
const year = "YYYY" // Sets a variable for year (later passed intto footer.ejs)
app.locals.moment = require("moment") // makes moment module locally available to all .ejs
app.locals.year = year // makes variable 'year' available to be locally available to all .ejs

// Page Render START

// Index or Home
app.get("/", function (req, res) {
  res.render("index", pageInfo.index)
})

// About Page
app.get("/about", function (req, res) {
  res.render("about", pageInfo.about)
})

// Contact Page
app.get("/contact", function (req, res) {
  res.render("contact", pageInfo.contact)
})

// Page Render END

app.use(express.static(path.join(__dirname, "public")))

app.use(function (req, res, next) {
  res.status(404)
  res.send("404: File Not Found")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`)
})
