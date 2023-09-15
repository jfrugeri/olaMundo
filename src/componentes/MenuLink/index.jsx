import { Link, useLocation } from "react-router-dom";
import styles from "./MenuLink.module.css";

export default function MenuLink({ children, to}) {
  
  //Recebe um objeto que contem path que tem o path da pagina Atual
  const location = useLocation();
  console.log(location);

  return (
    <Link
      className={`
            ${styles.link}
            ${location.pathname === to ? styles.linkDestacado : ""}
        `}
      to={to}
    >
      {children}
    </Link>
  );
}
