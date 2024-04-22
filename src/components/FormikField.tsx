import clsx from 'clsx/lite';
import { Field, FieldAttributes } from 'formik';

interface IProps extends FieldAttributes<any> {}

export default function FormikField({ className, mask, ...props }: IProps) {
  return (
    <Field name={props.name} {...props}>
      {({ field, form, meta }: any) => {
        console.log(form);
        return (
          <input
            {...field}
            placeholder={props.placeholder}
            className={clsx(
              'border border-blackish rounded-lg p-3 w-full focus:outline-primary caret-primary',
              meta.error && meta.touched && 'border-red-600',
              className
            )}
            onChange={(e) => {
              if (mask) {
                e.target.value = mask(e.target.value);
              }
              form.handleChange(e);
            }}
          />
        );
      }}
    </Field>
  );
}
