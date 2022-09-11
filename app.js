const { response } = require('express');
const express = require('express');
const fetch = require('node-fetch');

//express app
const app = express();



const apiKey = "7QFWUIUF1EN4GYXZEBEPI7FI8R4R7MUBQC";

const apiURL = "https://api-goerli.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=";

//register view engine
app.set('view engine','ejs');


//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended:true }));


//routes
app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/verify',(req,res)=>{
    res.render('verify');
});

app.post('/verify', (req,res)=>{
    const txhash = req.body.txhash;
    res.redirect(`/verify/${txhash}`);
} );

app.get('/verify/:id',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    fetch(`${apiURL}${id}&apikey=${apiKey}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    const mfd = "21-10-2002";
    const consname = "Diksha";
    const date = "16-11-1999";
    const price = "$ 250";
    res.render('info',{id : id, mfd : mfd, consname : consname, date: date, price: price});
});

app.listen(process.env.PORT || 3000);

// https://api-goerli.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=0x4b593be6521a6c3e20634926f72ba6770d3f997fbd6e5f52e4f17249c59b2d18&apikey=7QFWUIUF1EN4GYXZEBEPI7FI8R4R7MUBQC
