import { ControleLivros } from "@/classes/controle/ControleLivros";
import { NextApiRequest, NextApiResponse } from "next";

export const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => { 
    try{
        if(req.method === "GET"){
            const livros = controleLivro.obterLivros();
            res.status(200).json(livros);
        }
        else if(req.method === "POST"){
            const adicionaLivro = req.body;
            controleLivro.incluir(adicionaLivro);
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