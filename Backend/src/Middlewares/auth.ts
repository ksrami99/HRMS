const jwt = require("jsonwebtoken");

export const authMiddleware = async (req: any, res: any, next: any) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({
            message: "No Token found",
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.id = decoded.id;
        req.role = decoded.role;
        next();
    } catch (err) {
        return res.status(401).json({
            message: "Invalid Token",
        });
    }
};

export const verifyRole =
    (Role: [string?, string?, string?, string?]) =>
    (req: any, res: any, next: any) => {
        if (!req.id) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }
        if (!Role.includes(req.role)) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        }
        next();
    };
