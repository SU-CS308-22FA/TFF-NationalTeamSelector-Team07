const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({ //db conection'ıyla ilgili
    host: 'localhost',
    user: 'root',
    password: 'password',
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

app.listen(3001, () => {
console.log("running port 3001");  
});