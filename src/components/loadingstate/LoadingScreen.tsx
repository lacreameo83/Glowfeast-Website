import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import image from "../../assets/BackgroundImages/largescreenbackground.png";

function LoadingScreen() {



   const { setIsLoading} = useContext(GlobalContext);

  useEffect(() => {
    const heroImage = new Image();

    heroImage.src = image

    heroImage.onload = () => {
      setIsLoading(false);
    };

    heroImage.onerror = () => {
      // Don't leave the user stuck forever if the image fails
      setIsLoading(false);
    };
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-16 h-16 border-t-4 border-b-4 border-primary rounded-full animate-spin"></div>
    </div>
  );
}



export default LoadingScreen;