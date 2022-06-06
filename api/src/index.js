import 'nodemon/config'
import usuariocontroller from: /controller/usuarioController.js

import consultacontroller from: /controller/consultaController.js
import express from 'express'
import cors from 'cors'

const server= express();
server.use (cors());
server.use(usuarioController);
server.use(consulta);

server.listen(process.env.port () => 
console.log ('API conectada na pota ${process.env.ports'/usuario/login', async (req, resp) -> {
    try{
        const{email, senha} = req.body;
        const resposta = await login (email, senha)
        if (!resposta){
            throw new Error (credenciais invalidas);
        
        }
    }
}));