import { Router } from "express"
import { jogadorIndex, jogadorCreate, jogadorUpdate, jogadorDestroy, jogadorNome, idadeIntervalo, 
      pesquisaGeral, estatistica, incrementaIdade, decresenteSalario } from "./controllers/jogadorController.js"

const router = Router()

router.get('/jogadores', jogadorIndex)
      .post('/jogadores', jogadorCreate)
      .put('/jogadores/:id', jogadorUpdate)
      .delete('/jogadores/:id', jogadorDestroy)
      .get('/jogadores/pesq/:nome', jogadorNome)
      .get('/jogadores/pesq/:idadeUm/:idadeDois', idadeIntervalo)
      .get('/jogadores/geral/:pesquisa', pesquisaGeral)
      .get('/jogadores/estatistica', estatistica)
      .get('/jogadores/incrementa', incrementaIdade)
      .get('/jogadores/decresenteSalario', decresenteSalario)
      
export default router