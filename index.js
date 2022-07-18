const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.get('/', (req, res) => {
    res.send("Hi ! Express!!!")
});

app.use('/contato', (req, res, next) => {
    console.log('passando a chamada para o bodyparse!')
    next()
});
//bodyparser
app.use(bodyparser.urlencoded({extended: false}));
app.use('/contato', express.static(__dirname + '/public/formulario'));


app.post('/contato', (req, res) => {
    console.log("Nome: " + req.body.nome_campo);
    console.log("Email: " + req.body.email_campo);
    console.log("Mensagem: " + req.body.msg_campo);

    res.redirect('/');

});

app.get('/:p', (req, res, next) => {
    res.status(404).send("Erro 404!!")

});




app.listen(3000, () => console.log("back-end executando...."));