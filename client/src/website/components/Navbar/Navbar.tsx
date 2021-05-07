import Toggle from "../../theme/themeToggle";
import tw from "twin.macro";
import NavItems from "./NavItems";
import { RiMenu2Line, RiCloseLine } from "react-icons/ri";
import { TiHomeOutline, TiContacts } from "react-icons/ti";
import { useState } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const onClick = () => setMenu(!menu);



  return (
    <nav tw="top-0 p-4 sm:p-5 md:px-10 lg:px-20 bg-transparent space-y-1 shadow-md text-center items-center h-16 md:h-24 md:( flex space-y-0 justify-between)    ">
      <div tw="flex justify-between ">
        <Link to="/" tw=" text-3xl  tracking-wider text-blue-600 font-bold">FinTech</Link>
        <div tw="flex  items-center justify-center space-x-5">
          <div tw="md:hidden">
            <Toggle />
          </div>
          {!menu ? <RiMenu2Line
            onClick={onClick}
            tw="text-white text-3xl md:hidden mr-2 cursor-pointer"
          /> :
            <RiCloseLine
              onClick={onClick}
              tw="text-white text-3xl md:hidden mr-2 cursor-pointer"
            />}
        </div>
      </div>

      <div
        css={[menu ? tw`right-0 ` : tw`-right-full`]}
        tw=" fixed z-20 transition-all md:space-x-5 bg-gradient-to-r from-blue-400  to-purple-400  md:(from-transparent to-transparent) dark:(from-gray-700 to-gray-600 md:(from-transparent to-transparent))  items-center w-screen h-screen space-y-10 md:(static flex h-auto space-y-0 w-auto)">
        <div tw="(space-y-10 mt-10) md:(space-y-0 mt-0) ">
          <NavItems onClick={onClick} to="/">
            <div tw="flex items-center" >
              <TiHomeOutline tw="mr-1.5" />
            Home
            </div>
          </NavItems>
        </div>
        <div tw="(space-y-10 mt-10) md:(space-y-0 mt-0) ">
          <NavItems onClick={onClick} to="/contact">
            <div tw="flex items-center" >
              <TiContacts tw="mr-1.5" />
            Contact Us
            </div>
          </NavItems>
        </div>

        <div tw="xs:hidden  md:inline">
          <Toggle tw=" items-center pt-2 " />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;