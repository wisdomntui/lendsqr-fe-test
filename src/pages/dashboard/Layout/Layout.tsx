import {Outlet} from 'react-router-dom';
import styles from './Layout.module.scss';
import Header from './Header';
import Sidebar from './Sidebar';
import {useState} from 'react';

const Layout = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className={styles.layoutWrapper}>
      <div className={styles.headerSection}>
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <div className={styles.mainSection}>
        <div
          className={styles.sidebar}
          style={{visibility: showMenu ? 'visible' : 'hidden'}}
        >
          <Sidebar />
        </div>
        <div className={styles.body}>{<Outlet />}</div>
      </div>
    </div>
  );
};

export default Layout;
