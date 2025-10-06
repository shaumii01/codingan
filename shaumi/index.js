const express = require('express');
const app = express();
let ejs = require('ejs');

app.set('view engine', 'ejs');

app.get('/form', function(req,res){
    res.render('tampil');
});

app.get('/contact', function(req,res) {
    let github = "INI GITHUB";
    let youtube = "INI YT";
    let Linkedin = "INI LINKEDIN";


    res.render('contact', {"judul" : "Kontak saya", "github" : github, "Linkedin" : Linkedin, "youtube" : youtube});
});

app.get('/data_siswa', function(req,res){
    let siswa = [
        {"nama" : "somi", "kelas" : "12 rpl 1"}, 
        {"nama" : "miu", "kelas" : "11 tkj 3"}, 
        {"nama" : "maui", "kelas" : "11 tkr 2"}, 
        {"nama" : "mimi", "kelas" : "12 tsm 4"}
    ];

    res.render('data_siswa', {data : siswa});
});

app.get('/datajurusan', function(req,res){
    let jurusan = ["RPL", "TKR", "TKJ", "TSM"];

    res.render('datajurusan', {data : jurusan })
})
app.listen(300, () => {
    console.log('Server berjalan di http://localhost:300');
});