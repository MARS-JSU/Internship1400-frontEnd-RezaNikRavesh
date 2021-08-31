import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <main className={styles.container}>
      <MainNavigation />
      {children}
    </main>
  );
}
export default Layout;
