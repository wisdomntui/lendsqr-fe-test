import {camelCase} from 'lodash';
import * as Icons from './icons';

export const icons = {...Icons};

// Define the type for the icon keys
type IconKeys = keyof typeof icons;

export const iconList = (Object.keys(icons) as IconKeys[])
  .map((key) => camelCase(key))
  .sort();
