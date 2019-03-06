export {default as Add} from './Add';
export {default as Arrow} from './Arrow';
export {default as Grid} from './Grid';
export {default as List} from './List';
export {default as Loading} from './Loading';
export {default as Visibility} from './Visibility';

// Interfaces

export interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  onClick?: () => void;
}
