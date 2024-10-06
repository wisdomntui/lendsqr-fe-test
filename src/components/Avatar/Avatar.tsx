interface AvatarProps {
  size: string;
  src: string;
  radius: string;
}

const Avatar = ({size = '20', src, radius = '100%'}: AvatarProps) => {
  return (
    <img
      src={src}
      alt=""
      style={{
        height: size,
        width: size,
        borderRadius: radius,
        objectFit: 'cover',
        objectPosition: 'center',
      }}
    />
  );
};

export default Avatar;
