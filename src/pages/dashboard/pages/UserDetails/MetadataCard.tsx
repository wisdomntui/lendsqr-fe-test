import Avatar from '../../../../components/Avatar/Avatar';
import Icon from '../../../../components/Icon/Icon';
import styles from './UserDetails.module.scss';

interface MetadataCardProps {
  userData: any;
}

const MetadataCard = ({userData}: MetadataCardProps) => {
  return (
    <div className={styles.metaWrapper}>
      <div className={styles.topSection}>
        <div className={styles.avatarSection}>
          <div className={styles.avatar}>
            {userData?.profile?.avatar?.length > 0 ? (
              <Avatar
                src={userData?.profile?.avatar}
                size="48px"
                radius="100%"
              />
            ) : (
              <Icon name="user" />
            )}
          </div>
          <div className={styles.nameSection}>
            <p>
              {userData?.profile?.firstName} {userData?.profile?.lastName}
            </p>
            <p>{userData?.accountNumber}</p>
          </div>
        </div>
        <div className={styles.tierSection}>
          <p>User's Tier</p>
          <div>
            <Icon name="filledStar" />
            <Icon name="Star" />
            <Icon name="Star" />
          </div>
        </div>
        <div className={styles.balanceSection}>
          <p>₦{userData?.accountBalance}</p>
          <p>{userData?.profile?.bvn}/Providus Bank</p>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div>General Details</div>
        <div>Documents</div>
        <div>Bank Details</div>
        <div>Loans</div>
        <div>Savings</div>
        <div>App and System</div>
      </div>
    </div>
  );
};

export default MetadataCard;
