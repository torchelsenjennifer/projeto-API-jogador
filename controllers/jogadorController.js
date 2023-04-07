import { sequelize } from "../databases/conecta.js";
import { Jogador } from "../models/Jogador.js";
import { Op } from "sequelize";

export const jogadorIndex = async (req, res) => {
  try {
    const jogadores = await Jogador.findAll();
    res.status(200).json(jogadores);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const jogadorCreate = async (req, res) => {
  const { nome, clube, posicao, salario, idade } = req.body;

  // se não informou estes atributos
  if (!nome || !clube || !posicao || !salario || !idade) {
    res.status(400).json({
      id: 0,
      msg: "Erro... Informe nome, clube, posicao, idade e salario do jogador.",
    });
    return;
  }

  try {
    const jogador = await Jogador.create({
      nome,
      clube,
      posicao,
      salario,
      idade,
    });
    res.status(201).json(jogador);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const jogadorUpdate = async (req, res) => {
  const { id } = req.params;
  const { nome, clube, posicao, idade, salario } = req.body;

  if (!nome || !clube || !posicao || !idade || !salario) {
    res.status(400).json({
      id: 0,
      msg: "Erro... Informe nome, clube, posicao e idade do jogador.",
    });
    return;
  }

  try {
    const jogador = await Jogador.update(
      {
        nome,
        clube,
        posicao,
        idade,
        salario,
      },
      {
        where: { id },
      }
    );
    res.status(200).json(jogador);
  } catch (error) {
    res.status(400).send(error);
  }
};
export const jogadorDestroy = async (req, res) => {
  const { id } = req.params;
  try {
    const jogador = await Jogador.destroy({
      where: { id },
    });
    res.status(200).json(jogador);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const jogadorNome = async (req, res) => {
  const { nome } = req.params;
  //const pesq = req.params.pesq
  try {
    const jogadores = await Jogador.findAll({
      where: {
        nome: {
          //[Op.substring]: pesq
          [Op.like]: "%" + nome + "%",
        },
      },
    });
    res.status(200).json(jogadores);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const idadeIntervalo = async (req, res) => {
  const { idadeUm, idadeDois } = req.params;

  try {
    const jogadores = await Jogador.findAll({
      where: {
        idade: {
          [Op.between]: [idadeUm, idadeDois],
        },
      },
    });
    res.status(200).json(jogadores);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const pesquisaGeral = async (req, res) => {
  const { pesquisa } = req.params;

  try {
    const jogadores = await Jogador.findAll({
      where: {
        [Op.or]: [
          {
            nome: { [Op.like]: "%" + pesquisa + "%" },
          },
          {
            clube: { [Op.like]: "%" + pesquisa + "%" },
          },
          {
            posicao: { [Op.like]: "%" + pesquisa + "%" },
          },
          {
            idade: { [Op.like]: "%" + pesquisa + "%" },
          },
          {
            salario: { [Op.like]: "%" + pesquisa + "%" },
          },
        ],
      },
    });
    res.status(200).json(jogadores);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const numeroJogadores = async (res) => {

  try{
    const jogadores = await Jogador.count()
    res.status(200).json({numeroJogadores: jogadores});
  }catch (error) {
    res.status(400).send(error);
  }
};

