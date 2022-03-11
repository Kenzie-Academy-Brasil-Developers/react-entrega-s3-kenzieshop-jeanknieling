import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/dashboard">
        <h1>Kenzie Shop</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/cart">Carrinho</Link>
          </li>
          <li>
            <Link to="/">Entrar</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
