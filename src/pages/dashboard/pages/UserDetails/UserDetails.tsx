import {Link, useParams} from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import Icon from '../../../../components/Icon/Icon';
import styles from './UserDetails.module.scss';
import MetadataCard from './MetadataCard';
import MainCard from './MainCard';
import {useUserQuery} from '../../../../api/queries/user.query';
import {useEffect, useState} from 'react';

type RouteParams = {
  id: string; // Define the expected URL parameters and their types
};

const UserDetails = () => {
  const {id} = useParams<RouteParams>();

  const {isLoading, data} = useUserQuery(id);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (data) {
      setUserData(data);
    }
  }, [data]);

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

      <MetadataCard userData={userData} />

      <MainCard userData={userData} />
    </div>
  );
};

export default UserDetails;
