const { Conflict } = require('http-errors');
const { User } = require('../../models/users');

const signup = async(req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict('Email in use');
  }
  const newUser = new User({ email });
  newUser.setPassword(password);
  await newUser.save();

  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Registration successful',
    user: {
      email: newUser.email,
      subscription: newUser.subscription
    }
  });
};

module.exports = signup;
