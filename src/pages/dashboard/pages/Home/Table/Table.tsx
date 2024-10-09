import dayjs from 'dayjs';
import Icon from '../../../../../components/Icon/Icon';
import Tag from '../../../../../components/Tag/Tag';
import styles from './Table.module.scss';
import {capitalize} from 'lodash';
import {Link} from 'react-router-dom';

interface TableProps {
  isLoading: boolean;
  data: any;
}

const Table = ({isLoading, data}: TableProps) => {
  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            <th>
              <div className={styles.headerContent}>
                organization
                <Icon name="filter" />
              </div>
            </th>
            <th>
              <div className={styles.headerContent}>
                username
                <Icon name="filter" />
              </div>
            </th>
            <th>
              <div className={styles.headerContent}>
                email
                <Icon name="filter" />
              </div>
            </th>
            <th>
              <div className={styles.headerContent}>
                phone number
                <Icon name="filter" />
              </div>
            </th>
            <th>
              <div className={styles.headerContent}>
                date joined
                <Icon name="filter" />
              </div>
            </th>
            <th>
              <div className={styles.headerContent}>
                status
                <Icon name="filter" />
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        {!isLoading && data.length > 0 && (
          <tbody>
            {data.map((user: any) => {
              return (
                <tr>
                  <td>{capitalize(user.orgName)}</td>
                  <td>
                    <Link to={`/user/${user.id}`}>
                      {capitalize(user.userName)}
                    </Link>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{dayjs(user.createdAt).format('MMM D, YYYY h:mm A')}</td>
                  <td>
                    <Tag text="blacklisted" color="#E4033B" bg="#ffe5ec" />
                  </td>
                  <td>
                    <Icon name="threeDots" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      {isLoading && <div className={styles.emptyState}>Loading...</div>}
      {data.length === 0 && (
        <div className={styles.emptyState}>There are no users!</div>
      )}
    </div>
  );
};

export default Table;
