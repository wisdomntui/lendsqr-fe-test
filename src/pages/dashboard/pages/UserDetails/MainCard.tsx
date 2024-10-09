import styles from './UserDetails.module.scss';

interface MainCardProps {
  userData: any;
}

const MainCard = ({userData}: MainCardProps) => {
  return (
    <div className={styles.mainCardWrapper}>
      <div className={styles.gridFit}>
        <div>
          <p>Personal Information</p>
        </div>

        <div>
          <div>
            <p>PHONE NUMBER</p>
            <p>{userData?.phoneNumber}</p>
          </div>
          <div>
            <p>EMAIL ADDRESS</p>
            <p>{userData?.email}</p>
          </div>
          <div>
            <p>BVN</p>
            <p>{userData?.profile?.bvn}</p>
          </div>
          <div>
            <p>GENDER</p>
            <p>{userData?.profile?.gender}</p>
          </div>
          <div>
            <p>MARITAL STATUS</p>
            <p>N\A</p>
          </div>
          <div>
            <p>CHILDREN</p>
            <p>N\A</p>
          </div>
          <div>
            <p>TYPE OF RESIDENCE</p>
            <p>N\A</p>
          </div>
        </div>
      </div>
      <div className={styles.gridFit}>
        <div>
          <p>Education and Employment</p>
        </div>

        <div>
          <div>
            <p>LEVEL OF EDUCATION</p>
            <p>{userData?.education?.level}</p>
          </div>
          <div>
            <p>EMPLOYMENT STATUS</p>
            <p>{userData?.education?.employmentStatus}</p>
          </div>
          <div>
            <p>SECTOR OF EMPLOYMENT</p>
            <p>{userData?.education?.sector}</p>
          </div>
          <div>
            <p>DURATION OF EMPLOYMENT</p>
            <p>{userData?.education?.duration}</p>
          </div>
          <div>
            <p>OFFICIAL EMAIL</p>
            <p>{userData?.education?.officeEmail}</p>
          </div>
          <div>
            <p>MONTHLY INCOME</p>
            <p>
              {userData?.education?.monthlyIncome[0]} -{' '}
              {userData?.education?.monthlyIncome[1]}
            </p>
          </div>
          <div>
            <p>LOAN REPAYMENT</p>
            <p>{userData?.education?.loanRepayment}</p>
          </div>
        </div>
      </div>
      <div className={styles.gridFill}>
        <div>
          <p>Socials</p>
        </div>

        <div>
          <div>
            <p>TWITTER</p>
            <p>{userData?.socials?.twitter}</p>
          </div>
          <div>
            <p>FACEBOOK</p>
            <p>{userData?.socials?.facebook}</p>
          </div>
          <div>
            <p>INSTAGRAM</p>
            <p>{userData?.socials?.instagram}</p>
          </div>
        </div>
      </div>
      <div className={styles.gridFill}>
        <div>
          <p>Guarantor</p>
        </div>

        <div>
          <div>
            <p>FULL NAME</p>
            <p>
              {userData?.guarantor?.firstName} {userData?.guarantor?.lastName}
            </p>
          </div>
          <div>
            <p>PHONE NUMBER</p>
            <p>{userData?.guarantor?.phoneNumber}</p>
          </div>
          <div>
            <p>EMAIL ADDRESS</p>
            <p>N\A</p>
          </div>
          <div>
            <p>RELATIONSHIP</p>
            <p>N\A</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
