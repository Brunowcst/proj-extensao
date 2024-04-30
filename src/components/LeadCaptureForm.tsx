import Button from '@/components/Button';
import { leadCaptureForm } from '@/forms/leadCaptureForm';
import { Form, Formik } from 'formik';
import FormikFieldRenderer from './FormikFieldRenderer';
import { db } from "../../firebase/firebase";
import { setDoc, doc, serverTimestamp } from "firebase/firestore";

interface IProps {
  formClassName?: string;
}

export default function LeadCaptureForm({ formClassName }: IProps) {
  
  async function sendDataToFirebase(name: String, phone: String, email:String) {
    await setDoc(doc(db, "proj-exten", `${name}`), {
      name: name,
      phone: phone,
      email: email, 
      data: serverTimestamp()
    });
  }  

  return (
    <Formik
      initialValues={leadCaptureForm.initialValues}
      onSubmit={(values) => sendDataToFirebase(values.name, values.phone, values.email)}
      validationSchema={leadCaptureForm.validationSchema}
    >
      {({ dirty, isValid }) => {
        return (
          <Form className={formClassName}>
            {leadCaptureForm.fields.map((field, i) => (
              <FormikFieldRenderer field={field} key={i} />
            ))}

            <div className='flex justify-center my-6 md:mb-4'>
              <Button
                type='submit'
                className='px-7 md:px-5 md:text-sm lg:text-base'
                disabled={!isValid || !dirty}
              >
                Receber novidades
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
