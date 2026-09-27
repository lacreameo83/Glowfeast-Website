import MobileHomeView from './MobileHomeView';
import DesktopHomeView from './DesktopHomeView';

export default function HomePage() {
  return (
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