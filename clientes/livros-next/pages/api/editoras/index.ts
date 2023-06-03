import { ControleEditora } from "@/classes/controle/ControleEditora";
import { NextApiRequest, NextApiResponse } from "next";

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => { 
    try{
        if(req.method === "GET"){
            const editoras = controleEditora.getEditoras();
            res.status(200).json(editoras);
        }
        else{
            res.status(405).end("Método não permitido.");
        }
    }
    catch{        
        res.status(500).end("Erro no servidor.");
    }
}