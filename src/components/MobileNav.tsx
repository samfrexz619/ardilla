import { NavLink } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../assets/logo.svg'
import { navItems, } from "../data";
import DropDown from "./Dropdown";




interface mobileProp {
  mobileNav: ()=> void;
}
const Mobile = ({ mobileNav }: mobileProp) => {
  return ( 
    <header className="mobile" onClick={mobileNav}>
      <nav onClick={(e)=> e.stopPropagation()} className="mobile__nav">
        <ul className="mobile__link">
          <li>
            <NavLink to='/'>
              <img src={logo} alt="company's logo" />
            </NavLink>
          </li>
          <li className="header__link">
            {
              navItems.map(link => (
                <NavLink key={link.id} to={link.path}>
                  {
                    link.name === 'products' ? <DropDown title={link.name} dropdownLists={ link.children } withIcon={true} /> : 
                    link.beta ? <span>{link.name} <small className="status">beta</small></span> :
                    link.name === 'company' ? <DropDown title={link.name} dropdownLists={link.children} withIcon={true} /> : link.name
                  }
                </NavLink>
              ))
            }
          </li>
        </ul>
      </nav>
      <span role="button" onClick={mobileNav} className="close">
        <AiOutlineClose />
      </span>
    </header>
   );
}
 
export default Mobile;