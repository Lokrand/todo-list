const jsonServer = require("json-server");
const auth = require("json-server-auth");

const app = jsonServer.create();
const router = jsonServer.router("./db.json");

// /!\ Bind the router db to the app
app.db = router.db;

const middlewares = jsonServer.defaults();

app.use(middlewares);

// // You must apply the auth middleware before the router
app.use(auth);
app.use(router);
app.listen(3001, () => {
  console.log("start server");
});
