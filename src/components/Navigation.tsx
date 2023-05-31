import { CgMenuRight } from 'react-icons/cg'
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.svg'
import DropDown from "./Dropdown";
import Button from "./Button";
import _map from '../assets/_map.svg'
import { navItems, mapItems } from "../data";


interface navProp {
  mobileNav: ()=> void;
}
const Navigation = ({ mobileNav }: navProp) => {
 
  return ( 
    <header className="header">
      <nav className="header__nav">
        <ul>
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
        <div className="header__sect">
          <span>
            <NavLink to='#'>Sign in</NavLink>
          </span>
          <span>
            <Button className="header__btn">
              <span>create account</span>
            </Button>
          </span>
          <span>
            <DropDown 
              title={<img src={_map} alt="" className="image"/>} 
              withIcon={false}
              dropdownLists={mapItems}
            />
          </span>
        </div>
        <span onClick={mobileNav} role='button' className='header__icon'>
          <CgMenuRight  />
        </span>
      </nav>
    </header>
   );
}
 
export default Navigation;