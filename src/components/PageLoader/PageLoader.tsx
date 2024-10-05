import styles from './PageLoader.module.scss';

const PageLoader = () => {
  return (
    <div className={styles.LoaderContainer}>
      <i className={styles.Loader}></i>
    </div>
  );
};

export default PageLoader;
