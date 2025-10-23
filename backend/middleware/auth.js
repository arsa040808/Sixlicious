import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.json({ success: false, message: "Not Authorized, Login again" });
  }

  const token = authHeader.split(" ")[1]; // ambil setelah 'Bearer'
  if (!token) {
    return res.json({ success: false, message: "Token missing" });
  }

  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export default authMiddleware;
