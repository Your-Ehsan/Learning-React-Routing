import { NavLink } from "react-router-dom";
export default function Header() {
  const NavClasses = "mx-2 leading-snug text-slate-200 mx-4 text-white ";
  return (
    <>
      <NavLink
        className={(e) =>
          e.isActive
            ? `${NavClasses}` + "font-semibold underline"
            : `${NavClasses}`
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={(e) =>
          e.isActive
            ? `${NavClasses}` + "font-semibold underline"
            : `${NavClasses}`
        }
        to={"/contact"}
      >
        Contact us
      </NavLink>
      <NavLink
        className={(e) =>
          e.isActive
            ? `${NavClasses}` + "font-semibold underline"
            : `${NavClasses}`
        }
        to={"/about"}
      >
        About us
      </NavLink>
    </>
  );
}
