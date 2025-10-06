import express from "express";
import mysql from "mysql2/promise";

const app = express();
const port = 3000;


const connection = await mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
  database: "loginmi"
 });

app.get("/users", async (req, res) => {
   try {
     const [rows] = await connection.query("SELECT * FROM users");
     res.json(rows);
     res.status(500).json({ error: err.message });   
    } });

 app.listen(port, () => {
   console.log(`Server jalan di http://localhost:${port}`);
});

