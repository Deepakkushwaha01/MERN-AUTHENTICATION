import mongoose from "mongoose";

const db = async () => {
    const user=process.env.DB_USER;
    const pass=process.env.DB_PASSWORD;

    const url = `mongodb+srv://${user}:${pass}@cluster.uaukntt.mongodb.net/auth`


    try {
        await mongoose.connect(url);
        console.log("Connected to Database");
    } catch (error) {
        console.log("failed to Connect with Database");
    }
}

export default db;
