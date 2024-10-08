import Icon from '../../../../../components/Icon/Icon';
import styles from './StatsCard.module.scss';

interface StatsCardProps {
  icon: string;
  title: string;
  value: string;
  bg: string;
}

const StatsCard = ({icon, title, value, bg}: StatsCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon} style={{backgroundColor: bg}}>
        <Icon name={icon} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default StatsCard;
