import { Router } from "express"
import { jogadorIndex, jogadorCreate, jogadorUpdate, jogadorDestroy, jogadorNome, idadeIntervalo, 
      pesquisaGeral, numeroJogadores } from "./controllers/jogadorController.js"

const router = Router()

router.get('/jogadores', jogadorIndex)
      .post('/jogadores', jogadorCreate)
      .put('/jogadores/:id', jogadorUpdate)
      .delete('/jogadores/:id', jogadorDestroy)
      .get('/jogadores/pesq/:nome', jogadorNome)
      .get('/jogadores/pesq/:idadeUm/:idadeDois', idadeIntervalo)
      .get('/jogadores/geral/:pesquisa', pesquisaGeral)
      .get('/jogadores/totalJogadores', numeroJogadores)

export default router