const Todo = require("../models/todo.model");
exports.getTodoList = (req, res, next) => {
  Todo.find()
    .then((todos) => {
      res.status(200).json(todos);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getTodo = (req, res, next) => {
  Todo.findById(req.params.id)
    .then((todo) => {
      res.status(200).json(todo);
    })
    .catch((err) => {
      next(err);
    });
};

exports.createTodo = (req, res, next) => {
  const todo = new Todo({
    ...req.body,
  });
  todo
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      next(err);
    });
};

exports.updateTodo = (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.id, { ...req.body })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteTodo = (req, res, next) => {
    Todo.findByIdAndDelete(req.params.id, { ...req.body })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
};
