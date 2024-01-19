let http = require("http");
let url = require("url");
let fs = require("fs");

var server = http.createServer(gestisciRichieste);
server.listen(1337);
console.log("Il server è stato avviato !1337!");

function gestisciRichieste(richiesta, risposta){
    let indirizzo = richiesta.headers.host + richiesta.url;
    let info = url.parse(indirizzo, true);
    let risorsa = info.pathname;
    let file;
    let parola = "";
    switch(risorsa){
        case "/":
            file = fs.readFileSync("index.html");
            risposta.writeHead(200, {"Content-Type":"text/html","Access-Control-Allow-Origin":"*"});
            risposta.write(file);
            risposta.end();
            break;
        case "/index.css":
            file = fs.readFileSync("index.css");
            risposta.writeHead(200, {"Content-Type":"text/css","Access-Control-Allow-Origin":"*"});
            risposta.write(file);
            risposta.end();
            break;
        case "/index.js":
            file = fs.readFileSync("index.js");
            risposta.writeHead(200, {"Content-Type":"text/javascript","Access-Control-Allow-Origin":"*"});
            risposta.write(file);
            risposta.end();
            break;
        case "/multa.html":
            file = fs.readFileSync("multa.html");
            risposta.writeHead(200, {"Content-Type":"text/html","Access-Control-Allow-Origin":"*"});
            risposta.write(file);
            risposta.end();
            break;
        case "/multa.js":
            file = fs.readFileSync("multa.js");
            risposta.writeHead(200, {"Content-Type":"text/javascript","Access-Control-Allow-Origin":"*"});
            risposta.write(file);
            risposta.end();
            break;
        case "/multa.css":
            file = fs.readFileSync("multa.css");
            risposta.writeHead(200, {"Content-Type":"text/css","Access-Control-Allow-Origin":"*"});
            risposta.write(file);
            risposta.end();
            break;
        case "/camion.jpg":
            file = fs.readFileSync("img/camion.jpg");
            risposta.writeHead(200, {"Content-Type":"image/jpeg","Access-Control-Allow-Origin":"*"});            
            risposta.write(file);
            risposta.end();
            break;
        case "/van.jpeg":
            file = fs.readFileSync("img/van.jpeg");
            risposta.writeHead(200, {"Content-Type":"image/jpeg","Access-Control-Allow-Origin":"*"});            
            risposta.write(file);
            risposta.end();
            break;
        case "/auto_mod.png":
            file = fs.readFileSync("img/auto_mod.png");
            risposta.writeHead(200, {"Content-Type":"image/png","Access-Control-Allow-Origin":"*"});            
            risposta.write(file);
            risposta.end();
            break;
        case "/velocita":
            let numero={"velocità":Math.floor(Math.random() * ((150-30)+1) + 30).toString()};
            risposta.writeHead(200, {"Content-Type":"application/json","Access-Control-Allow-Origin":"*"});
            risposta.write(JSON.stringify(numero));
            risposta.end();
            break;
            
    }
}