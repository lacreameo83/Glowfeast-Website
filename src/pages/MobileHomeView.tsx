 import SmallPhoneHomeScreen from '../assets/BackgroundImages/SmallPhoneHomeScreen.png';
import SecondaryButton from '../components/buttons/SecondaryButton';
 
 function MobileHomeView() {
  return (
    <div className="p-4 h-screen  flex items-end justify-center   w-full bg-cover bg-center bg-no-repeat text-center" style={{backgroundImage:`url(${SmallPhoneHomeScreen})`}}>
      <SecondaryButton />
    </div>
  );
}


export default MobileHomeView;