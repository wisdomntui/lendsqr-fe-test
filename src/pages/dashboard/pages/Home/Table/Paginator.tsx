import Icon from '../../../../../components/Icon/Icon';
import styles from './Table.module.scss';

const Paginator = () => {
  return (
    <div className={styles.paginatorWrapper}>
      <div className={styles.leftSection}>
        <p>Showing</p>
        <div>
          <p>100</p>
          <Icon name="caretDownSlim" />
        </div>
        <p>out of 100</p>
      </div>
      <div className={styles.rightSection}>
        <div>
          {' '}
          <Icon name="caretLeftSlim" />{' '}
        </div>
        <p>1 2 3 ... 15 16</p>
        <div>
          {' '}
          <Icon name="caretRightSlim" />{' '}
        </div>
      </div>
    </div>
  );
};

export default Paginator;
