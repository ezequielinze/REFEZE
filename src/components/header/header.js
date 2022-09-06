import './header.scss'
import carrito from '../../assets/carrito2.png'

function Header() {
  return (
    <header className="contenedor">
      
        <h1 className='logo'>REFEZE</h1>
        <nav className='nav'>
          <li className='nav_menu'><a className='menu' href='#'>INICIO</a></li>
          <li className='nav_menu'><a className='menu' href='#'>PRODUCTOS</a></li>
          <li className='nav_menu'><a className='menu' href='#'>CONTACTO</a></li>
          <li className='nav_menu'><a className='menu' href='#'>POLITICA DE DEVOLUCION</a></li>
          <li className='nav_menu'><a className='menu' href='#'><img className='carrito' src={carrito} /></a></li>
        </nav>

      
    </header>

  );
}

export default Header;