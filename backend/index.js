const exprss = require("express");
const { createTodo, updateTodo } = require("./types");
const todo = require("./db");
const app = exprss();

app.use(express.json());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const paarsePayload = createTodo.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
  });
  res.json({
    msg: "Todo created",
  });
});

app.get("/todos", function (req, res) {
  const todos = await todo.find({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created",
  });
});
app.put("/completed", function (req, res) {
  const createPayload = req.body;
  const parsedPayload = updateTodo.safeParse(updateTodo);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.update({
    _id: req.body.id,
  }, {
    completed: true,
  });
  res.json({
    msg: "Todo marked as completed",
  });
});
