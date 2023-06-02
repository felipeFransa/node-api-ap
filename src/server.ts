import express, { Request, Response } from "express";

const server = express();

server.get('/', (req: Request, res: Response) => {
  res.send('Servidor Online!')
})

server.get('/home', (req: Request, res: Response) => {
  res.send('Pagina home!')
})

server.listen(3000, ()=>{console.log('Servidor Online!')})