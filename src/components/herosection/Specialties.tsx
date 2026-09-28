import { ArrowRight } from "lucide-react";
import NavButtons from "../buttons/NavButtons";
import SpecialtiesCards from "../cards/SpecialtiesCard";
import cakeSliceJuice from "../../assets/cakesimage/chocolate.jpg";
import  ballon  from "../../assets/ballons/ballon.png";
import tradedeco from "../../assets/decorations/tradedeco.png";
import ballondeco from "../../assets/decorations/ballondeco.png"

function Specialties() {
  return (
    <div className="bg-light-green flex justify-between flex-col padding h-[600px] md:h-[600px] ">
      <div className=" h-[100px] w-full flex items-center justify-between px-4 md:px-10">
        <div>
            <h2 className="text-[15px]  md:text-[32px] text-dark-green font-bold ">Our Specialties</h2>
             <div >
            <ol className="hidden md:flex items-center w-fit md:gap-8 mt-2">
            <NavButtons text="Cakes" />

             <NavButtons text="Bakes & Surprises" />
             <NavButtons text="Events" />
            </ol>
            
             </div>
             
             
        </div>
        <div className=" text-dark-green flex items-center cursor-pointer font-medium gap-2 text-[12px] w-fit px-4 md:px-10 h-full">
            <p>View All  </p>
            <span><ArrowRight className="w-4 h-4" /></span>
        </div>
        
        
      </div>
      <div className=" w-full h-full grid grid-cols-2 xl:grid-cols-4 gap-4 ">
         
         <SpecialtiesCards image={cakeSliceJuice} heading="Cakes" description="Birthday, Wedding, Custom Cakes" />
         <SpecialtiesCards image={ballon} heading="Bakes & Surprises" description="Gift Packages $ Sweet treats" />
         <SpecialtiesCards image={ballondeco} heading="Events" description="Wedding, Private, Corporate Events" />
         <SpecialtiesCards image={tradedeco} heading="Gallery" description="Our Work Pass Joy" />


      </div>
    </div>
  );
}

export default Specialties;