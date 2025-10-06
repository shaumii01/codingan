const express = require("express")
const app = express()
const port = 300

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/login', function (req, res){
    res.send (`
    <form action = '/login' method='post'>
    <h1>UPDATE DATA PRODUK</h1>
    <div>
    Nama Barang
        <input type ='text' name = 'nama' />
    </div>

    <div>
    Harga
        <input type ='text' name = 'price' />
    </div>

    <div>
    Jumlah barang
        <input type ='text' name = 'jumlah' />
    </div>

    <div>
    Kode Barang
        <input type ='text' name = 'kode' />
    </div>

    <button type = 'submit'>LOGIN</button>
    `);
});

app.post('/login', function (req, res){
    console.log(req.body);
    res.send(`
    Selamat datang ${req.body.usn}
    `);
});

app.listen(port, () => {
    console.log(`Server sudah di port : ${port}`)
  })