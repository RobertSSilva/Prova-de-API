import { pathToFileURL } from "url";
import { con } from "./connection.js";
export async function inserir pet(pet){
    constComando=
    `insert into id_pet       int
                 nm_pet       varchar (50)
                 Values(?, ?)` 
                 const [resposta]= await con.query(
                     comando, [pet.id, pet nome]
                 )
                 pet.id=resposta.insertId;
                 return pathToFileURL;
}