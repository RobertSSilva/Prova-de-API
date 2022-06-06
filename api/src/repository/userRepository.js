import { con } from: /connection.js

const comando=
    tb_pet
    'id_pet     int,
     nm_pet     varchar (50)'

     const [linhas] = await con.quary (comando, [email, senha])
     return linhas [0];
}