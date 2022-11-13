import {Link} from 'react-router-dom'
function Header() {
   return (
      <header>
         <Link to='/'>
         <h2 style={{ padding: '0.5em 0 0.5em 0' }}>Feedback UI</h2>
         </Link>
      </header>
   );
}

export default Header;

//you can directly destructure the params instead of doin props.
