const mysql = require('mysql2/promise');


app.get("/koneksii", async function (req,res){
const koneksi = mysql.createPool ({
    host: "localhost",
    user: "root",
    password: "",
    database: "loginmi",
});


        const [results, fields] = await koneksi.query(
            'INSERT INTO tblogin (nama, umur) VALUES ("somi", "17")',
        );

    res.send("tampil_data", {judul : "ini judul"});
        });
