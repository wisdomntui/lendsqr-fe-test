import {icons as C} from './Icon.utils';
import {upperFirst} from 'lodash';

interface IconProps {
  name: string;
  width?: number;
  height?: number;
}

const Icon = ({name, width, height}: IconProps) => {
  const iconName = upperFirst(name);
  const IconComponent = C[iconName];

  if (iconName in C) {
    return <IconComponent width={width} height={height} />;
  }

  return <></>;
};

export default Icon;
