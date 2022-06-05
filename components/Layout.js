import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";

const Layout = ({children}) => {
  return (
    <>
    <Nav />
      <div className={styles.container}>
          <Header />
          <div className={styles.main}>
              {children}
          </div>
      </div>
    </>
  )
}

export default Layout