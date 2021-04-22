projectData = {};

const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')

//Variables for API call
let URL1 = 'https://api.meaningcloud.com/sentiment-2.1?key=';
let URL2 = 'https://api.meaningcloud.com/documentstructure-1.0?key=';
const json = '&of=json&txt=';
const Key = process.env.API_KEY
const end = '&model=General&lang=en';

//start up an instance of app
const app = express();
app.use(express.static('dist'));

//Cors
const cors = require('cors');
app.use(cors());

//Bodyparser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

console.log(__dirname)

app.get('/', function (req, res) {
   res.sendFile('dist/index.html')
})

app.listen(8080, function () {
    console.log('App listening on http://localhost:8080')
})

app.post("/showsentiment", async(req, res)=>{
    const newData1 = await fetch(`${URL1}${Key}&&url=${req.body.urlvalue}&lang=en`,{
        method: 'POST'
    });
    try{
        const data1 = await newData1.json();
        console.log(newData1, data1)
        res.send(data1);
    }catch(error){
        console.log("error", error);
}
});

app.post("/showheaders", async(req, res)=>{
    const newData2 = await fetch(`${URL2}${Key}&&url=${req.body.urlvalue}&lang=en`,{
        method: 'POST'
    });
    try{
        const data2 = await newData2.json();
        console.log(newData2, data2)
        res.send(data2);
    }catch(error){
        console.log("error", error);
}
});
