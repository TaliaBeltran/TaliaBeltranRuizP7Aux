import { Request, Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

export const authToken = async (req: Request, res: Response,
    next: NextFunction) => {
    const token = req.header("x-access-token");
    if (!token) return res.json({ message: "missing token, access denied" });
    try{
        const payload = jwt.verify(token, "palabraClave");
        if(payload){
            console.log(payload);
            return next();
        }

        return res.json({ message :"invalid token "});

    }catch(e){

        return res.json({ message : "error, the token is posibly expired", e});

    }
}