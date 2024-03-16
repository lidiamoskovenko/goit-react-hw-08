import { useId } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import css from './ContactForm.module.css';

import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contact/operations";
const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required name"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required number")
    .matches(/^[0-9-+]+$/, "Must be only digits"),
});

const initialValues = {
  name: "",
  number: "",
};

export const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleAddContact = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    dispatch(addContacts(newContact));
    actions.resetForm();
  };  
  return (
    <div className={css.contactListContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={handleAddContact}
      >
        <Form autoComplete="off" className={css.contactForm}>
          <div className={css.fieldContainer}>
            <label htmlFor={nameId} className={css.contactLabel}>Name</label>
            <Field className={css.contactField}
              type="text"
              name="name"
              id={nameId}
            />
             <ErrorMessage
              name="name"
              component="span"
              />
           </div>

          <div className={css.fieldContainer}>
            <label htmlFor={numberId} className={css.contactLabel}>Number</label>
            <Field  className={css.contactField}
              type="number"
              name="number"
              id={numberId}
            />       
            <ErrorMessage
              name="number"
              component="span"
            />
          </div>

          <button type="submit" className={css.formButton}>Add contact</button>
        </Form>
      </Formik>
    </div>
  );
}
