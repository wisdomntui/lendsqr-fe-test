import {Link} from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import Icon from '../../../../components/Icon/Icon';
import styles from './UserDetails.module.scss';
import MetadataCard from './MetadataCard';
import MainCard from './MainCard';

const UserDetails = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Link to={`/`} className={styles.breadCrumb}>
          <Icon name="arrowLeft" />
          <p>Back to Users</p>
        </Link>

        <div className={styles.titleSection}>
          <p>User Details</p>
          <div className={styles.buttons}>
            <Button
              text="BLACKLIST USER"
              type="outline"
              color="#E4033B"
              radius="8px"
              width="170px"
              height="40px"
            />

            <Button
              text="ACTIVATE USER"
              type="outline"
              color="#39CDCC"
              radius="8px"
              width="170px"
              height="40px"
            />
          </div>
        </div>
      </div>

      <MetadataCard />

      <MainCard />
    </div>
  );
};

export default UserDetails;
