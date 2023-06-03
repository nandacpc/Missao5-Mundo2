import Link from "next/link";
export const Menu: React.FC = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navbar-nav">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/LivroLista" className="nav-link">Catálogo</Link>
            <Link href="/LivroDados" className="nav-link">Novo</Link>
          </div>
        </nav>
    );
 }