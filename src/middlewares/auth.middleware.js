
import verifyToken from "../utils/jwt.js";

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers["Authorization"]?.split(" ")[1];
        const userVerified = await verifyToken(token);
        req.user = userVerified.decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
}

export default authMiddleware;











