import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Users</div>

      <div className={styles.stats}></div>
    </div>
  );
};

export default Home;
