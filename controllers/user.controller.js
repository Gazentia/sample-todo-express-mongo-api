const User = require("../models/user.model");
exports.getUserList = (req, res, next) => {
  User.find()
    .select("-password")
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getUser = (req, res, next) => {
  User.findById(req.params.id)
    .select("-password")
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      next(err);
    });
};

exports.createUser = (req, res, next) => {
  const user = new User({
    ...req.body,
  });
  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      next(err);
    });
};

exports.updateUser = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { ...req.body })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
};

exports.deleteUser = (req, res, next) => {
  User.findByIdAndDelete(req.params.id, { ...req.body })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      next(err);
    });
};
