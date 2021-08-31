import MainNavigation from "./MainNavigation";
import styles from "./Layout.module.css";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <main className={styles.container}>
      <MainNavigation />
      {children}
      <Footer />
    </main>
  );
}
export default Layout;
