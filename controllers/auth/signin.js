const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');
const { User } = require('../../models/users');

const { SECRET_KEY } = process.env;

const signin = async(req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || user.verify === false || !user.comparePassword(password)) {
    throw new Unauthorized('Email / password is wrong or email not varified');
  }
  const payload = {
    id: user._id
  };

  const token = jwt.sign(payload, SECRET_KEY);

  await User.findByIdAndUpdate(user._id, { token });

  res.json({
    status: 'success',
    code: 200,
    token: token,
    user: {
      email: user.email,
      subscription: user.subscription
    }
  });
};

module.exports = signin;
