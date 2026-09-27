// import { Link } from "react-router-dom";

function ActionButton({
  text,
  border,
  bg,
  color,
  icon
}: {
  text?: string;
  border?: string;
  bg?: string;
  color?: string;
  icon ? :any;
}) {
  return (
    <div>
      {/* <Link to="/GlowfeastHomePage"> */}
      <button
        style={{
        //   backgroundImage: "var(--secondaryGradient)",
          padding: "0px 26px",
        }}
        className={`cursor-pointer  font-[500] flex items-center gap-1 font-poppins text-[8px] h-[28px] rounded-[18px]  shadow-lg transition duration-300 ${border ?? ""} ${bg ?? ""} ${color ?? ""}`}
      >
        {text}
        <span className=" ">{icon}</span>
        
      </button>
      {/* </Link> */}
    </div>
  );
}

export default ActionButton;