import Link from 'next/link';

const Header = () => {
 
 return (
  <header className='header-container'>
    <h1 className='title-nav'>SHOP-IT</h1> 
    <nav> 
      <ul className='navbar'>
        <li >
          <Link  href="/login" className='nav-link'>LOGIN</Link></li>
        <li >
          <Link  href="/cart" className='nav-link'>CART</Link></li>
        </ul>
    </nav>
  </header>
  )
}

export default Header;