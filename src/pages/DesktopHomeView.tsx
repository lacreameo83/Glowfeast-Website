//  import largePhoneHomeScreen from "..//assets/BackgroundImages/largescreenbackground.png";
// import ActionButton from "../components/buttons/ActionButton";
// import SecondaryButton from "../components/buttons/SecondaryButton";
// import { ArrowRight } from "lucide-react";
import NavrBar from "../components/nav/NavBar";
import Specialties from "../components/herosection/Specialties";
import HeroSection from "../components/herosection/HeroSection";
 
 function DesktopHomeView() {
  return (
    <div className="">
     <section>
      <div className="h-screen  md:h-[600px]   w-full ">
          <div  className=" h-[60px] bg-white fixed top-0 left-0 w-full z-50   ">
            <NavrBar />
          </div>
          
          <div className="h-full">
            <HeroSection subheading="Cakes bakes, Surprises and event services for birthdays, weddings and all celebrations." />
          </div>
          
      </div>
     </section>

     <section  className="bg-white padding h-[650px] md:h-[700px]  w-full">
      <Specialties />
     </section>

     <section>
           <div className="h-[100vh] ">
            <HeroSection heading="Let's Create Something Sweet Together" subheading="Your dream come event" />
          </div>
     </section>
    </div>
  );
}


export default DesktopHomeView;