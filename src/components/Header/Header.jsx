import logo from '../../assets/logo.png';
import './Header.scss';

function Header() {
  return (
    <div className="header">
      <div className='logo__section'>
        <img className='logo__image--width' src={logo} alt="Logo paquete" />
      </div>
      <nav className='header__navigation'>
        <ul className='navigation__list'>
          <li>Inicio</li>
          <li>¿Cómo funciona?</li>
          <li>Integra tu tienda online</li>
          <li>Blogística</li>
          <li>Puntos mipaquete</li>
        </ul>
      </nav>
      <div className='button-menu__section'>
      <div className='button-menu__section--background'>
        <button className=''>Ingresa</button>
        <button className=''>Regístrate</button>
      </div>
      </div>
    </div>
  );
}

export default Header;
