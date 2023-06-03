import { Injectable } from '@angular/core';
import { Livro } from './livro';

interface LivroMongo {
  _id: string;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private baseURL = 'http://localhost:3030/livros';

  async obterLivros(): Promise<Livro[]> {
    const response = await fetch(this.baseURL);
    const data: LivroMongo[] = await response.json();
    return data.map(livroMongo => this.mapLivroMongoToLivro(livroMongo));
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = this.mapLivroToLivroMongo(livro);
    const response = await fetch(this.baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(livroMongo)
    });
    return response.ok;
  }

  async excluir(codigo: string): Promise<boolean> {
    const url = `${this.baseURL}/${codigo}`;
    const response = await fetch(url, {
      method: 'DELETE'
    });
    return response.ok;
  }

  private mapLivroMongoToLivro(livroMongo: LivroMongo): Livro {
    return {
      codigo: livroMongo._id,
      codEditora: livroMongo.codEditora,
      titulo: livroMongo.titulo,
      resumo: livroMongo.resumo,
      autores: livroMongo.autores
    };
  }

  private mapLivroToLivroMongo(livro: Livro): LivroMongo {
    return {
      _id: '',
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };
  }
}
