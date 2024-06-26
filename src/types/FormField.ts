import { OptionProps } from 'react-select';

export type FormField = {
  name: string;
  placeholder?: string;
  type?: string;
  as?: string;
  options?: OptionProps[];
  mask?: (input: any) => any;
  props?: any;
};
