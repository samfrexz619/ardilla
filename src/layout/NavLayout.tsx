import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Mobile from "../components/MobileNav";
import { useState } from "react";


const NavLayout = () => {
  const [openNav, setOpenNav] = useState<boolean>(false)

  const handleMobileNav =()=> {
    setOpenNav(!openNav)
  }
  return ( 
    <main>
      <Navigation mobileNav={handleMobileNav} />
      <section className="layout">
        <Outlet  />
      </section>
      {openNav && <Mobile mobileNav={handleMobileNav}/>}
    </main>
   );
}
 
export default NavLayout;