const customError = require("../errors");

const checkPermissions = (requestUser, resourceUserId) => {
  // console.log(requestUser)
  // console.log(resourceUserId)
  // console.log(typeof requestUser)

  if (requestUser.role === "admin") return;
  if (requestUser.userId === resourceUserId.toString()) return;
  throw new customError.UnathorizedError(
    "Not Authorized to access this route."
  );
};

module.exports = checkPermissions;
