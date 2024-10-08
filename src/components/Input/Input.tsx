import {useRef, useState} from 'react';
import styles from './Input.module.scss';
import search from '../../assets/icons/search.svg';
import Icon from '../Icon/Icon';

interface InputProps {
  height?: string;
  width?: string;
  radius?: string;
  searchable?: boolean;
  placeholder?: string;
  type?: string;
}

const Input = ({
  type = 'text',
  height,
  width,
  radius,
  placeholder,
  searchable,
}: InputProps) => {
  const inputRef = useRef(null);

  // Holds the focus state of the input
  const [isFocused, setIsFocused] = useState(false);

  // Handles the inner width of the input component
  const getInnerWidth = () => {
    return type === 'password' || searchable ? '80%' : '100%';
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        height: height ?? '40px',
        width: width ?? '447px',
        borderRadius: radius ?? '5px',
        borderColor: isFocused ? '#39CDCC' : '#545f7d26',
      }}
    >
      <input
        className={styles.input}
        type={searchable ? 'text' : type}
        placeholder={placeholder}
        ref={inputRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{width: getInnerWidth()}}
      />
      {type === 'password' && (
        <div className={styles.afterContent}>
          <p className={styles.passwordText}>SHOW</p>
        </div>
      )}

      {type !== 'password' && searchable && (
        <div className={styles.afterContentSearch}>
          <Icon name="search" width={14} height={14} />
        </div>
      )}
    </div>
  );
};

export default Input;
