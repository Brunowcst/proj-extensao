import calendarIcon from '@/assets/icons/calendar.svg';
import { FormField } from '@/types/FormField';
import clsx from 'clsx/lite';
import { toZonedTime } from 'date-fns-tz';
import { ptBR } from 'date-fns/locale';
import { useField } from 'formik';
import Image from 'next/image';
import { forwardRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface IProps {
  field: FormField;
  className?: string;
}

const CustomInput = forwardRef((props: any, ref: any) => (
  <div
    ref={ref}
    className={clsx(
      'flex items-center gap-1 focus-within:outline',
      props.className
    )}
    onClick={() => props.onClick}
  >
    <input
      value={props.value}
      placeholder={props.placeholder}
      type='text'
      onClick={props.onClick}
      className={clsx('flex-grow outline-none')}
      readOnly
    />
    <button
      className='example-custom-input'
      onClick={props.onClick}
      type='button'
    >
      <Image
        src={calendarIcon}
        width={21}
        height={22}
        className='object-contain'
        alt='Calendário'
      />
    </button>
  </div>
));

export default function DateInput({ field, className }: IProps) {
  const [formikField, meta, helpers] = useField(field.name);
  return (
    <ReactDatePicker
      selected={formikField.value}
      dateFormat={'dd/MM/YYYY'}
      placeholderText={field.placeholder}
      minDate={field.props.min}
      onSelect={(date, _) => {
        helpers.setValue(toZonedTime(date, 'America/Fortaleza'));
      }}
      onChange={(date) => {
        if (date) helpers.setValue(toZonedTime(date, 'America/Fortaleza'));
        else helpers.setValue(null);
      }}
      locale={ptBR}
      className={clsx(
        'border border-blackish rounded-lg p-3 w-full focus-within:outline-primary',
        meta.error && meta.touched && 'border-red-600',
        className
      )}
      wrapperClassName='w-full flex items-center'
      customInput={<CustomInput />}
    />
  );
}
