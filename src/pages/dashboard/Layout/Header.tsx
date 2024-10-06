import styles from './Layout.module.scss';
import logo from '../../../assets/images/logo.png';
import Input from '../../../components/Input/Input';
import bell from '../../../assets/icons/bell.svg';
import Avatar from '../../../components/Avatar/Avatar';
import imageAvatar from '../../../assets/images/image-avatar.png';
import caretDown from '../../../assets/icons/caret-down.svg';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.leftSection}>
        <div className={styles.headerLogo}>
          <img src={logo} alt="App Logo" width={21} height={21} />{' '}
          <h1>lendsqr</h1>
        </div>

        <Input
          searchable
          placeholder="Search for anything"
          width="100%"
          height="40px"
          radius="8px"
        />
      </div>

      <div className={styles.rightSection}>
        <div className={styles.headerNotification}>
          <p>Docs</p>
          <img src={bell} alt="" width={26} height={26} />{' '}
        </div>
        <div className={styles.headerProfile}>
          <Avatar src={imageAvatar} size="48px" radius="100%" />
          <div className={styles.profileDropdown}>
            <p>Adedeji</p>
            <img src={caretDown} alt="" width={7} height={4} />{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
