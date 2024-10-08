import {useState} from 'react';
import Icon from '../../../components/Icon/Icon';
import styles from './Layout.module.scss';
import {navItems} from './navitems';
import {toUpper, startCase} from 'lodash';

const Sidebar = () => {
  const [active, setActive] = useState('dashboard');

  return (
    <div className={styles.sidebarWrapper}>
      <div className={styles.topNav}>
        <div>
          <Icon name="briefcase" />
          <p>Switch Organisation</p>
          <Icon name="caretDownSlim" />
        </div>

        <div
          style={{
            borderLeft: active === 'dashboard' ? '3px solid #39cdcc' : '',
            background: active === 'dashboard' ? '#ebfafa' : '',
          }}
          onClick={() => setActive('dashboard')}
        >
          <Icon name="home" />
          <p>Dashboard</p>
        </div>
      </div>

      <div className={styles.bottomNav}>
        {navItems.map((val: any, key: any) => {
          return (
            <div className={styles.bottomNavContent} key={key}>
              <p>{toUpper(val.title)}</p>

              <div>
                {val.items.map((item: any, key: any) => {
                  return (
                    <div
                      style={{
                        borderLeft: key === active ? '3px solid #39cdcc' : '',
                        background: key === active ? '#ebfafa' : '',
                      }}
                      onClick={() => setActive(key)}
                      key={key}
                    >
                      <Icon name={item.icon} />
                      <p>{startCase(item.text)}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
