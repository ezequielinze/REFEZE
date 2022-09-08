import './header.scss'
import carrito from '../../assets/carrito2.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="contenedor">

      <Link to='/'>
        <h1 className='logo'>REFEZE</h1>
      </Link>


      

      <nav className='nav'>
        <li className='nav_menu'><Link className='menu' to='/'>INICIO</Link></li>
        <li className='nav_menu'><Link className='menu' to='/productos/remera'>REMERAS</Link></li>
        <li className='nav_menu'><Link className='menu' to='/productos/pantalon'>PANTALONES</Link></li>
        <li className='nav_menu'><Link className='menu' to='/productos/zapato'>ZAPATOS</Link></li>
        <li className='nav_menu'><Link className='menu' to='/productos/carrito'><img className='carrito' src={carrito} /></Link></li>
      </nav>


    </header>

  );
}

export default Header;