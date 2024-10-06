import {Outlet} from 'react-router-dom';
import styles from './Layout.module.scss';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.headerSection}>
        <Header />
      </div>
      <div className={styles.mainSection}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.body}>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
