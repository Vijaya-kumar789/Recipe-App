const jwt = require('jsonwebtoken');

const auth = {
    isAuth: async (req, res, next) => {
        try {
            const token = req.cookies.token;
            
            if (!token) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            try {
                const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
                req.userId = decodedToken.id;
                next();
            } catch (error) {
                res.status(400).json({ message: "Invalid token" });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

module.exports = auth;
