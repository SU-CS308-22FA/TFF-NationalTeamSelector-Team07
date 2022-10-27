const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({ //db conection'ıyla ilgili
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cs308', //burası db'nin adı olacak
});

app.use(express.json()); //taking api correctly
app.use(cors()); //error çıkmasın diye
app.use(bodyParser.urlencoded({extended: true})); //bu tarz uygulamalarda kulllanılmalıymış. nedenini bilmesek de olur


// app.get('/api/get', (req,res) => { //bütün reviewları alabilmek için bh ile bağplantısı 
//     const sqlSelect = "SELECT * FROM user_information";
//    db.query(sqlSelect, (err,result) => {
//     console.log(result);
//     res.send(result);
//    })
// })


app.post('/api/insert', (req,res) => { //iki variable'ı alıp db'ye aktarılacak kısım

    const name = req.body.name
    const surname = req.body.surname
    const email = req.body.email
    const password = req.body.password
    const username = req.body.username
    
    const sqlInsert = "INSERT INTO user_information (name, surname, email, password, username) VALUES (?,?,?,?,?)"
   db.query(sqlInsert, [name, surname, email, password, username], (err,result) => {
    console.log(err);
    console.log(result);
   })
});

app.delete('/api/delete/:username', (req,res) => {
    const username=req.params.username
    const sqlDelete = "DELETE FROM user_information WHERE username = ?";

    db.query(sqlDelete), username, (err,result) => {
        if (err) console.log(err);
    }

});

app.put('/api/update', (req,res) => {
    const username=req.body.username // bunun bilgileri değişiecek
    const name = req.body.name //name'i değişecek
    const sqlUpdate = "UPDATE user_information SET username = ? WHERE username = ?";

    db.query(sqlUpdate), [username, name], (err,result) => {
        if (err) console.log(err);
    }

});

app.listen(3001, () => {
console.log("running port 3001");  
});