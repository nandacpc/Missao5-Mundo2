import type { NextPage } from "next";
import React from "react";
import { useState } from "react";
import styles from "../styles/Home.module.css"
import { ControleEditora } from "@/classes/controle/ControleEditora";
import { ControleLivros } from "@/classes/controle/ControleLivros";
import { Livro } from "@/classes/modelo/Livro";
import { Menu } from "@/componentes/Menu";
import Head from "next/head";
import { Editora } from "@/classes/modelo/Editora";
import { useRouter } from "next/router";

const LivroDados: NextPage = () => {
    const controleEditora = new ControleEditora();
    const controleLivros = new ControleLivros();
    
    const opcoes = controleEditora.getEditoras().map((editora: Editora) => ({
        value: editora.codEditora,
        text: editora.nome}));
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    const router = useRouter();

    const tratarCombo = (event: React.ChangeEvent<HTMLSelectElement>) =>{
        setCodEditora(Number(event.target.value));        
    };

    const incluir = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const livro: Livro ={
            codigo: "",
            titulo: titulo,
            resumo: resumo,            
            codEditora: codEditora,
            autores: autores.split("\n")
        };
        controleLivros.incluir(livro)
            .then(() => {
                router.push("/LivroLista");
            })
            .catch((error) => {
                console.error("Erro ao incluir livro:", error);
            });
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>Loja Next</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Menu />
            <main className={`${styles.main}`}>
                <h1 className="display-2">Dados do Livro</h1>
                <form onSubmit={incluir}>
                    <div className="row">
                        <label>Título
                        <input type="text" className="form-control" value={titulo} onChange={(evento) => setTitulo(evento.target.value)}></input>
                        </label>
                        <label>Resumo
                        <textarea value={resumo} className="form-control" onChange={(evento) => setResumo(evento.target.value)}></textarea>
                        </label>
                        <label>Editora
                        <select className="form-select" value={codEditora} onChange={tratarCombo}>
                            {opcoes.map((opcao) => (
                                <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                            ))}
                        </select>
                        </label>
                        <label>Autores
                        <textarea className="form-control" value={autores} onChange={(evento) => setAutores(evento.target.value)}></textarea>
                        </label>
                    </div>
                    <button className="btn btn-primary d-block mt-3" type="submit">Incluir</button>                    
                </form>                
            </main>
        </div>
    );
};

export default LivroDados;
