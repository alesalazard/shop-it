import Link from 'next/link';

const Header = () => {
 
 return (
  <>
  <h1>SHOP-IT</h1> 
    
  <nav> 
    <ul>
      <li>
      <Link  href="/login"/>LOGIN</li>
      <li>
      <Link  href="/cart"/>CART</li>
      </ul>
  </nav>
  </>
  )
}

export default Header;