const { ctrlWrapper } = require("../../helpers");

const login = require("./login");
const register = require("./register");
const resendVerifyEmail = require("./resendVerifyEmail");
const verifyEmail = require("./verifyEmail");
const updateAvatar = require("./updateAvatar");
const subscription = require("./subscription");
const logout = require("./logout");
const current = require("./current");

module.exports = {
  register: ctrlWrapper(register),
  verifyEmail: ctrlWrapper(verifyEmail),
  resendVerifyEmail: ctrlWrapper(resendVerifyEmail),
  login: ctrlWrapper(login),
  logout: ctrlWrapper(logout),
  current: ctrlWrapper(current),
  subscription: ctrlWrapper(subscription),
  updateAvatar: ctrlWrapper(updateAvatar),
};
