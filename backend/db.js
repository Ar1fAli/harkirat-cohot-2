const mongoose = require("mongoose");

// kspring.data.mongodb.uri=mongodb+srv://ArifAli:2905Arif@foodiesdb.rpsanmc.mongodb.net/foodiesdb?retryWrites=true&w=majority&appName=foodiesdb

mongoose.connect(
  "mongodb+srv://ArifAli:2905Arif@foodiesdb.rpsanmc.mongodb.net/?retryWrites=true&w=majority&appName=todo",
);
const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);
module.exports = todo;
