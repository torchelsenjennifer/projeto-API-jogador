import { Router } from "express"
import { jogadorIndex, jogadorCreate, jogadorUpdate, jogadorDestroy, jogadorNome, idadeIntervalo, pesquisaGeral } from "./controllers/jogadorController.js"

const router = Router()

router.get('/jogadores', jogadorIndex)
      .post('/jogadores', jogadorCreate)
      .put('/jogadores/:id', jogadorUpdate)
      .delete('/jogadores/:id', jogadorDestroy)
      .get('/jogadores/pesq/:nome', jogadorNome)
      .get('/jogadores/pesq/:idadeUm/:idadeDois', idadeIntervalo)
      .get('/jogadores/pesq/:pesquisa', pesquisaGeral)

export default router