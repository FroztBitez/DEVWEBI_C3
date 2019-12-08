const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);



app.get('/', function(req, res){
   
    res.sendFile(__dirname + '/grafico.html');
});

io.on('connection', function(socket){
    console.log('alguem conectou');
    io.emit('#teste', "Uma mensagem");
});

let emitir = function(){


    let muitoBom = Math.floor(Math.random() * 100 + 1)  
    io.emit('#dado', muitoBom);
    
}

let intervalo = setInterval(emitir, 3000);

http.listen(3000, function(err){
    if(!err){
        console.log('Servidor rodando normalmente');
    }
});