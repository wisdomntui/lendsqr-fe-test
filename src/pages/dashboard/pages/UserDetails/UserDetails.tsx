import Button from '../../../../components/Button/Button';
import Icon from '../../../../components/Icon/Icon';
import styles from './UserDetails.module.scss';

const UserDetails = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.breadCrumb}>
          <Icon name="arrowLeft" />
          <p>Back to Users</p>
        </div>
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

      {/* <div className={styles.stats}>
        <StatsCard icon="statsUsers" title="users" value="2,453" bg="#fbe5ff" />
        <StatsCard
          icon="group"
          title="active users"
          value="2,453"
          bg="#ece5ff"
        />
        <StatsCard
          icon="loan"
          title="users with loans"
          value="2,453"
          bg="#feeae7"
        />
        <StatsCard
          icon="storage"
          title="users with savings"
          value="2,453"
          bg="#ffe5ec"
        />
      </div>

      <Table isLoading={isLoading} data={userData} />

      <Paginator /> */}
    </div>
  );
};

export default UserDetails;
