import Link from 'next/link';

const Header = () => {
 
 return (
  <>
  <h1 className='titleNav'>SHOP-IT</h1> 
    
  <nav> 
    <ul>
      <li >
      <Link  href="/login">LOGIN</Link></li>
      <li >
      <Link  href="/cart">CART</Link></li>
      </ul>
  </nav>
  </>
  )
}

export default Header;