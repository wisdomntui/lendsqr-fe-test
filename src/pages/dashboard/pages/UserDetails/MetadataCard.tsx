import Icon from '../../../../components/Icon/Icon';
import styles from './UserDetails.module.scss';

const MetadataCard = () => {
  return (
    <div className={styles.metaWrapper}>
      <div className={styles.topSection}>
        <div className={styles.avatarSection}>
          <div className={styles.avatar}>
            <Icon name="user" />
          </div>
          <div className={styles.nameSection}>
            <p>Grace Effiom</p>
            <p>LSQFf587g90</p>
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
          <p>₦200,000.00</p>
          <p>9912345678/Providus Bank</p>
        </div>
      </div>
      <div className={styles.bottomSection}></div>
    </div>
  );
};

export default MetadataCard;
