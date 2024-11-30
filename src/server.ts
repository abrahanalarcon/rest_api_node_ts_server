import express from 'express'
import router from './router'
 
const server = express()

server.use('/api/productos',router)

export default server