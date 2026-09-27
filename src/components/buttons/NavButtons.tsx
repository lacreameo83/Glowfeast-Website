import { Link } from "react-router-dom";

function NavButtons({text}: {text ? : string}) {
  return (
   <button >
    <li className="font-Poppins text-dark-green text-[14px]    hover:text-primary transition-colors">
        <Link to="/" >
            {text}
        </Link>
      </li>
   </button>
  );
}

export default NavButtons;