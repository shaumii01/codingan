const express = require("express")
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/update', function (req, res){
    res.send(`
    <form action = '/update' method='post'>
        <h1>HALAMAN UPDATE DATA</h1>
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

        <button type = 'submit'> TAMBAH </button>
    </form>
    `);
});

app.post('/update', function (req, res){
    console.log(req.body);
    res.send(`
    HALAMAN UNTUK UPDATE DATA

    <p>Nama Barang : ${req.body.nama}</p>
    <p>Harga : ${req.body.price}</p>
    <p>Jumlah Barang : ${req.body.jumlah}</p>
    <p>Kode Barang : ${req.body.kode}</p>
    `);
});
app.listen(port, () => {
  console.log(`Server sudah di port : ${port}`)
})
