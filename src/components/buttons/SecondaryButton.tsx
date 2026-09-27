import { Link } from "react-router-dom";


function SecondaryButton() {
  return (
    <div className="margibottom-4 ">

      <Link to="/GlowfeastHomePage">
      <button style={{ backgroundImage: "var(--secondaryGradient)",padding : "0px 46px" }} className=" cursor-pointer  h-[48px] rounded-[18px]  text-primary    shadow-lg  transition duration-300">
        Get Started
      </button>
      </Link>
    </div>
  );
}


export default SecondaryButton;