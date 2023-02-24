import { Link } from "react-router-dom";
import { MDBBtn } from 'mdb-react-ui-kit';
function Header() {
    return (
     
        <header class="header-area header-sticky">
           <div class="container">
               <div class="row">
                   <div class="col-12">
                       <nav class="main-nav">
                        <Link class="logo" to={{ pathname: "/"}}>JADED</Link>
                           
                           <ul class="nav">
                               <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                               <li class="scroll-to-section"><a href="#men">Men's</a></li>
                               <li class="scroll-to-section"><a href="#women">Women's</a></li>
                               <li class="scroll-to-section"><a href="#kids">Kid's</a></li>
                               <li class="submenu">
                                   <a href="javascript:;">Pages</a>
                                   <ul>
                                       <li><Link to={{ pathname: "/about"}}>About Us</Link></li>
                                       <li><Link to={{ pathname: "/products"}}>Products</Link></li>
                                       <li><Link to={{ pathname: "/single-product"}}>Single Product</Link></li>
                                       <li><Link to={{ pathname: "/contact-us"}}>Contact Us</Link></li>
                                   </ul>
                               </li>
                               <li class="submenu">
                                   <a href="javascript:;">Features</a>
                                   <ul>
                                       <li><a href="#">Features Page 1</a></li>
                                       <li><a href="#">Features Page 2</a></li>
                                       <li><a href="#">Features Page 3</a></li>
                                   </ul>
                               </li>
                               <li class="scroll-to-section"><a href="#explore">Explore</a></li>
                               <li class="scroll-to-section"><Link to={{ pathname: "/login"}}><MDBBtn color='light' rippleColor='dark'>Login</MDBBtn></Link></li>
                               <li class="scroll-to-section"><Link to={{ pathname: "/signup"}}><MDBBtn color='dark' rippleColor='dark'>SignUp</MDBBtn></Link></li>
                           </ul>        
                           <a class='menu-trigger'>
                               <span>Menu</span>
                           </a>
                         
                       </nav>
                   </div>
               </div>
           </div>
       </header>
      
       
    );
}

export default Header;