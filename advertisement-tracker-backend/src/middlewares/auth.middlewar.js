const { verifyToken } = require("../utils/jwt");

const handleProtectRoute = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized Request." });
    }
    const decoded = verifyToken(token);
    req.user = decoded; 
    next(); 
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized",error:err });
  }
};

module.exports = { handleProtectRoute };
