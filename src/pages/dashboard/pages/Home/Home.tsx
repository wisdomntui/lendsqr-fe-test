import styles from './Home.module.scss';
import StatsCard from './StatsCard/StatsCard';
import Paginator from './Table/Paginator';
import Table from './Table/Table';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Users</div>

      <div className={styles.stats}>
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

      <Table />

      <Paginator />
    </div>
  );
};

export default Home;
