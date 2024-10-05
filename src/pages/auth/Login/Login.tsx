import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.loginWrapper}>
      <div className={styles.textSection}>
        <div className={styles.mainText}>Welcome!</div>

        <div className={styles.subText}>Enter details to login.</div>
      </div>

      <div className={styles.form}>
        <Input type="email" placeholder="Email" />

        <Input type="password" placeholder="Password" />

        <div className={styles.forgotPasswordText}>FORGOT PASSWORD?</div>

        <Button type="filled" text="LOG IN" />
      </div>
    </div>
  );
};

export default Login;
