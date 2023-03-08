import { publicacoes } from "../../../../dados";

export default function PublicacoesId(req, res) {

    const { id } = req.query; //desestruturação do objeto pegando apenas a propriedade id dentro de query
    const publicacaoFiltrada = publicacoes.find(p => p.id == id);

    res.status(200).json(publicacaoFiltrada);

}