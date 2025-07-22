import {generateToken } from "../utils/jwt.js";

const default_user = { id: 1, email: "kennel.liebig@gmail.com", password: "Password2025+" };  
     

const login = async (req, res) => {

    const { email, password } = req.body;
    if (email === default_user.email && password === default_user.password ) {
        const token = await generateToken(default_user); 
        res.status(200).json({ token });       
    }
    else if (email !== default_user.email || password !== default_user.password) {
        return res.status(401).json({ error: "Invalido email or password" });        
    }
    else {
        return res.status(500).json({ error: "Error interno del Servidor" });        
    };
}