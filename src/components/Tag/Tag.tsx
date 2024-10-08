import styles from './Tag.module.scss';

interface TagProps {
  text: string;
  color: string;
  bg: string;
}

const Tag = ({text, color, bg}: TagProps) => {
  return (
    <div className={styles.wrapper} style={{color, backgroundColor: bg}}>
      <p>{text}</p>
    </div>
  );
};

export default Tag;
