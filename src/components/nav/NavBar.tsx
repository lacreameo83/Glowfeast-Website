import { Link } from "react-router-dom";
import NavButtons from "../buttons/NavButtons";
import ActionButton from "../buttons/ActionButton";
import { MenuIcon, SearchIcon } from "lucide-react";

function  NavBar() {
  return (
    <div style={{padding:"0 20px"}} className=" bg-white h-[60px] fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-10 shadow-md">
      
         <div>
            <Link to="/" >
                {/* <h1 className="text-primary font-Poppins text-[20px] md:text-[24px] font-bold">Glowfeast</h1> */}
            
                  {/* <image src={("../../../public/glowfeastlogo.png")} alt="Glowfeast Logo" className="w-[100px] md:w-[150px]" /> */}
                    <img 
  src="/glowfeastlogo.png" 
  alt="Glowfeast Logo" 
  className="w-[100px] md:w-[100px]" 
/>
            </Link>
         </div>



         <div className="flex items-center gap-4">
            <ul className="hidden md:flex items-center text-primary-dark text-[14px] gap-8 font-Poppins  font-medium ">
                    <NavButtons text="Home" />
                     <NavButtons text="Cakes" />
                     <NavButtons text="Bakes $ Surprises" />
                     <NavButtons text="Events" />
                     <NavButtons text="Gallery" />
                     <NavButtons text="About" />
                     <NavButtons text="Contact" />

                    
                   
           </ul>


           <div className="flex items-center gap-4">
             <span className="hidden md:block">
                        <SearchIcon className="w-4 h-4" />
                     </span>
                     <span style={{ backgroundImage: "var(--primaryGradient)" }} className="hidden rounded-[18px] md:block">

                        <ActionButton  text="Order Now" color="text-white"    />

                     </span>
                     <span>
                        <MenuIcon className="w-4 text-dark-green cursor-pointer h-4" />
                     </span>
           </div>
          
         </div>

    </div>
  );
}   

export default NavBar;