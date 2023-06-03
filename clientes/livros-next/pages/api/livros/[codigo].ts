import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from ".";

export default (req: NextApiRequest, res: NextApiResponse) => { 
    try{
        if(req.method === "DELETE"){
            const removeLivro = Number(req.query.removeLivro);
            controleLivro.excluir(removeLivro);
            res.status(200).json({mensagem:"Sucesso!"});
        }
        else{
            res.status(405).end("Método não permitido.");
        }
    }
    catch{        
        res.status(500).end("Erro no servidor.");
    }
}