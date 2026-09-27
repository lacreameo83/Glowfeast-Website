 import largePhoneHomeScreen from "..//assets/BackgroundImages/largescreenbackground.png";
import ActionButton from "../components/buttons/ActionButton";
// import SecondaryButton from "../components/buttons/SecondaryButton";
import { ArrowRight } from "lucide-react";
import NavrBar from "../components/nav/NavBar";
 
 function DesktopHomeView() {
  return (
    <div className="">
     <section>
      <div className="h-screen  md:h-[600px]   w-full ">
          <div  className=" h-[60px] bg-white fixed top-0 left-0 w-full z-50   ">
            <NavrBar />
          </div>
          <div  className=" flex justify-center md:block  bg-cover phonetop-bg h-full      bg-center bg-no-repeat">
             <div style={{padding:'70px 20px'}} className="gap-3 flex flex-col  max-w-[300px] ">
                      <p className="text-white font-montserrat font-bold text-[20px] md:text-[34px] leading-tight  ">Freshly Baked With <span className="text-secondary">Love</span>  for Your <span className="text-secondary"> Special Moments</span></p>
                      <p className="text-white font-poppins text-[12px] leading-tight">Cakes bakes, Surprises and event services for birthdays, weddings and all celebrations.</p>
                      <div className="flex gap-4 mt-6">
                           <ActionButton icon={<ArrowRight className="w-3 h-4"  />} color="text-primary" bg="bg-secondary"  text="Order Now" />
                           <div style={{ backgroundImage: "var(--primaryGradient)" }} className="rounded-[18px]">
                               <ActionButton  color="text-white"   text="Book an Event"  />

                           </div>
                          
             </div>
             
             
             </div>

             
          </div>
          
      </div>
     </section>
    </div>
  );
}


export default DesktopHomeView;