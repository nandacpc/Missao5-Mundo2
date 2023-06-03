import { NextApiRequest, NextApiResponse } from 'next';
import {controleEditora} from './index';

export default (req: NextApiRequest, res: NextApiResponse) => {
    try{
        if(req.method === "GET"){
            const codEditora = Number(req.query.codEditora)
            const nomeEditora = controleEditora.getNomeEditora(codEditora);
            res.status(200).json({nome: nomeEditora});
        }
        else{
            res.status(405).end("Método não permitido.");
        }
    }
    catch{        
        res.status(500).end("Erro no servidor.");
    }
}
    
