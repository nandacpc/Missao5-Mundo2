import {Editora} from '../modelo/Editora';

let editoras: Array<Editora> = [
    {codEditora: 1, nome: "Alta Books"},
    {codEditora: 2, nome: "Pearson"},
    {codEditora: 3, nome: "Addison Wesley"},
];

export class ControleEditora{
    getEditoras(): Array<Editora>{
        return editoras;
    };
    getNomeEditora(codEditora: number): string{
        let resultado = editoras.filter((editora) => editora.codEditora === codEditora).map((editora) => editora.nome);
            return resultado[0];
    };
};