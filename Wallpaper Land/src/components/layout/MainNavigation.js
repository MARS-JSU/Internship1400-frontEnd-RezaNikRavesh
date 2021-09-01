import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header>
      <div className={styles.container}>
        <h1 className={styles.logo}>Wallpaper Land</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">All wallpapers</Link>
            </li>
            <li>
              <Link to="/Favorites">Favorites</Link>
            </li>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default MainNavigation;
