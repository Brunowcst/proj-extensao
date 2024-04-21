type Option = {
  label: string;
  value: string;
  props?: object;
};

export type FormField = {
  name: string;
  placeholder?: string;
  type?: string;
  as?: string;
  options?: Option[];
  props?: object;
};
