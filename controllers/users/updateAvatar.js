const { Unauthorized } = require('http-errors');
const { User } = require('../../models/users');
const path = require('path');
const fs = require('fs/promises');

const updateAvatar = async (req, res, next) => {
  const { _id } = req.user;
  const { path: tempDir, originalname } = req.file;
  const [extention] = originalname.split('.').reverse();
  const filename = `${_id}.${extention}`;
  const uploadDir = path.join(__dirname, '../../', 'public/avatars', filename);

  await fs.rename(tempDir, uploadDir);

  if (!_id) {
    throw new Unauthorized('Not authorized');
  }
  const image = path.join('avatars', filename);
  await User.findByIdAndUpdate(_id, { avatarURL: image });
  res.json({
    status: 'success',
    code: 200,
    message: 'Avatar successfully updated',
    data: {
      avatarURL: image,
    },
  });
};

module.exports = updateAvatar;
