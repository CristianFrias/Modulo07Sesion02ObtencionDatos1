const { Pool } = require("pg"); // POOL RECOMENDADA PARA HACER PRUEBAS SIMULTANEAS CON VARIOS USUARIOS

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    port: 5432,
    database: 'dvdrental',
    host: 'localhost'
});

// INICIO EJEMPLO ASÍNCRONO
// pool.query("SELECT ciudad from city LIMIT 10", (error, resultado) => {
//     if (error) {
//         return console.log(error.message);
//     }
//     console.table(resultado.rows)
// })
// console.log("Posterior a la consulta");
// FIN EJEMPLO ASÍNCRONO


// INICIO EJEMPLO SINCRONO
// FUNCIÓN AUTOEJECUTABLE IIFE
// TRY/CATCH
// (async() => {
//     try {
//         const resultado = await pool.query("Select * FROM city LIMIT 10");  // PARA QUE NO DE UNA PROMISE NECESITAMOS ASYNC O AWAIT Y CERRARLA EN UNA FUNCIÓN
//         console.table(resultado.rows);
//     } catch (error) {
//         console.log(error.message);
//     }
// })()
// FIN EJEMPLO SINCRONO


// CONSULTA CONCATENANDO STRINGS (NO RECOMENDADO)
// (async() => {
//     const nombre = "Cristián";
//     const apellido = "Frías";

//     const consulta = `INSERT INTO actor(first_name, last_name) VALUES('${nombre}'','${apellido}' )`;

//     const resultado = await pool.query(consulta);
//     console.table(resultado.rows)
// })()


// CONSULTAS PARAMETRIZADAS
// (async() => {
//     const resultado = pool.query("INSERT INTO actor(first_name, last_name) VALUES($1, $2)", ["María", "Roa"])
// })()


// CONSULTAS CON JSON COMO ARGUMENTO
// (async() => {
//     const argumentos = {
//         text: "INSERT INTO actor(first_name, last_name) VALUES($1, $2)",
//         values: ["Cristián", "Frías"]
//     }
//     await pool.query(argumentos)
//     console.log("Registro exitoso");
// })()


// MODO FILA Y ARREGLO
(async() => {
    const argumentos = {
        text: "SELECT * FROM actor LIMIT $1",
        values: [10],
        rowMode: "array"
    }
    const resultado = await pool.query(argumentos);
    console.log(resultado.rows);
    
})()