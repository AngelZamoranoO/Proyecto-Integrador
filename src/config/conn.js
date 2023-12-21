const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'127.0.0.1',
    user: 'root',
    password: 'rootpass',
    port: 3306,
    database: 'bd_funko',
    connectionLimit:10,
    waitForConnections: true,
    queueLimit: 0
})
pool.getConnection((err,conn)=>{

    console.log(err);
    if(err){
        console.log('Error en la coneccion de la db: '+err);
    }else{
        console.log('Conexion de la bd exitosa');
        conn.release()
    }
})

module.exports = {
    conn: pool.promise
}