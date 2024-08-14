import jwt from "jsonwebtoken"


export async function authMiddleware(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    if (!token) {
        res.json({
            msg:"there is something missing"
        })
    }
    try {
        const decoded = jwt.verify(token, "pranay");
        req.userId = decoded.id;
        
        next();
    } catch (err) {
        return res.status(403).send("Unauthorized");
    }

}