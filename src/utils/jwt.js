import jwt from "jsonwebtoken";
import { envs } from "../config/envs.js";


const { JWT_SECRET } = envs.secrets;

export const generateToken =  (userData) => {
    const user = { id: userData.id, email: userData.email };
    const experation = {expiresIn: "1h"};
        return jwt.sign(user , JWT_SECRET, experation);   
};

export const verifyToken =  (token) => {
    try {  
        const decoded = jwt.verify(token, JWT_SECRET);
        return { valid: true, decoded };      
    } catch (error) { 
        return { valid: false, error: error.message };       
    }     
};
 export default { generateToken, verifyToken };