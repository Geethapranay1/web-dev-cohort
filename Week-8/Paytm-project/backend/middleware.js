const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require('./config');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token || !token.startsWith("Bearer ")) {
        return res.status(403).send("No token provided");
    }
    const authToken = token.split(" ")[1];
    
    try {
        const decoded = jwt.verify(authToken, JWT_SECRET);
        req.userId = decoded.userId;
        
        next();
    } catch (err) {
        return res.status(403).send("Unauthorized");
    }
}

module.exports = {
    authMiddleware,
}