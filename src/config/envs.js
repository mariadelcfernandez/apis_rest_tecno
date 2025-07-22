import {config } from "dotenv";
config();
export const envs = {
    database:{
        apiKey: process.env.APIKEY,
        authDomain: process.env.AUTHDOMAIN,
        projectId: process.env.PROJECTID,
        storageBucket: process.env.STORAGEBUCKET,
        messagingSenderId: process.env.MESSAGINGSENDERID,
        appId: process.env.APPID

    },
    
    PORT: process.env.PORT || 5000,
    secrets: {
    JWT_SECRET: process.env.JWT_SECRET || "secret",
    session: process.env.SESSION || "session2025+" 
    }  
};

