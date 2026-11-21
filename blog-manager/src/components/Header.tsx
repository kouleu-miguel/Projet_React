import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Blog Manager</h1>

        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/new">Créer un article</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
