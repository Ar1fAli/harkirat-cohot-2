const exprss = require("express");
const { createTodo, updateTodo } = require("./types");
const app = exprss()


app.use(express.json());

app.post("/todo", function (req, res) {

  const createPayload = req.body
  const paarsePayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",

    })
    return;
  }

})

app.get("/todos", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = updateTodo.safeParse(updateTodo)
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    })
    return;

  }

})
app.put("/completed", function (req, res) {

})
