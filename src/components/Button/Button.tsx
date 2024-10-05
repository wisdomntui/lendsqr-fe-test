import styles from './Button.module.scss';

interface ButtonProps {
  type: string;
  color?: string;
  background?: string;
  width?: string;
  height?: string;
  radius?: string;
  text: string;
}

const Button = ({
  type = 'filled',
  color = '#ffff',
  background = '#39CDCC',
  width = '447px',
  height = '48px',
  radius = '8px',
  text,
}: ButtonProps) => {
  const getButtonStyle = () => {
    if (type === 'outline') {
      return {
        background: '#ffff',
        border: '1px solid ' + color,
        color,
        width,
        height,
        borderRadius: radius,
      };
    }
    return {background, color: '#ffff', width, height, borderRadius: radius};
  };

  return (
    <div className={styles.wrapper} style={getButtonStyle()}>
      <p>{text}</p>
    </div>
  );
};

export default Button;
