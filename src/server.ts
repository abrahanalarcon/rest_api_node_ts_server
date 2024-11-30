import express from 'express'
import router from './router'
import db from './config/db'

//conectar a base de datos

async function conectDB() {
    try{
         await db.authenticate()
         db.sync()
         console.log('Conexion exitosa a la BD')
    }catch(error){
      console.log(error)
       console.log('Hubo un error al conectar a la BD')
    }
    
}
 conectDB()
const server = express()

server.use('/api/productos',router)

export default server