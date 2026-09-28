import MobileHomeView from './MobileHomeView';
import DesktopHomeView from './DesktopHomeView';
import LoadingScreen from '../components/loadingstate/LoadingScreen';
import { GlobalContext } from '../context/GlobalContext';
import { useContext } from 'react';

export default function HomePage() {

  const { isLoading } = useContext(GlobalContext);
  return (

    isLoading ? <LoadingScreen /> :
    <div>
      {/* Mobile Layout: Visible on screens smaller than 768px (md) */}
      <div className="block md:hidden">
        <MobileHomeView />
      </div>

      {/* Desktop Layout: Hidden on mobile, visible on screens 768px and wider */}
      <div className="hidden md:block">
        <DesktopHomeView />
      </div>
    </div>
  );
}