import {Outlet} from 'react-router-dom';
import styles from './AuthLayout.module.scss';
import logo from '../../../assets/images/logo.png';
import loginImage from '../../../assets/images/sign-in.png';

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.authWrapper}>
          <div className={styles.leftContainer}>
            <div className={styles.logo}>
              <img src={logo} alt="App Logo" width={25} height={25} />{' '}
              <h1>lendsqr</h1>
            </div>
            <div className={styles.image}>
              <img src={loginImage} alt="App Logo" width={600} height={338} />
            </div>
          </div>
          <div className={styles.rightContainer}>{<Outlet />}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
