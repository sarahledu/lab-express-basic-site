
const express = require("express"); // get the framework
const hbs = require("hbs");
//you get a fucntion that you should use to  generate the backend app!
const path = require("path"); //part of the node's core lib
const server = express();
//you get an object
const port = 8008;

server.use(express.static(path.join(__dirname, "public")));
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "hbs");

server.get("/", (request, response) =>
  response.render("home", {
    title: "Home à la mer",
    css:["home","base"]
  })
);

server.get("/ploz", (request, response) => {
  const data = {
    title: "Plozevet",
    css:["base","house"]
  };
  response.render("ploz", data);
});

server.get("/guil", (request, response) => {
  const data = {
    title: "Signup",
    css:["base","house"]
  };
  response.render("guil",data);
});

server.get("/contact",(request, response)=>{
    const data = {
        title:"contact",
        css:["base","contact"]
    }
    response.render("contact",data)
})

server.listen(port); 