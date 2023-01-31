import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

//API for Login with username
/* const baseUrl="https://manteliviano.com/acuasur/api/loginMovil1"; */

//API for Login with email
/* const baseUrl="http://190.145.32.226:8000/api/acceso" */
//API for Register with email
/* const baseUrl="http://190.145.32.226:8000/api/register"; */


const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function Loginformik() {
  const initialCredentials = {
    email: "",
    password: "",
  };
  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        initialValues={initialCredentials}
        // Yup validation schema
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          // We save the data in the local storage
          localStorage.setItem('credentials', values)
        }}
      >
        {/* We obtain props from Formik */}
        {(props) => {
          const {
            values, // para obtener los valores del formulario en cualquier momento
            touched, // sirve para saber si el usuario ha tocado algún campo
            errors, // si hay algún error en algún campo o formulario en general
            isSubmitting, // dice si se envió o no el formulario
            handleChange, // sirve para saber si hay algún cambio en algún campo
            handleBlur, // sirve para saber si hay algún cambio de foco
          } = props;
          return (
            <Form>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
              />
              {/* Email errors */}
              {
              errors.email && touched.email && 
              (
                <div className='error'>
                  <p>{errors.email} </p>
                </div>
              )
              }

              <label htmlFor="password">Password</label>
              <Field id="password" type="password" name="password" placeholder="password" />

              {/* Password errors */}
              {
              errors.password && touched.password && 
              (
                <div className='error'>
                  <p>{errors.password} </p>
                </div>
              )
              }

              <button type="submit">Iniciar Sesion</button>
              {
                isSubmitting ? (<p>Login your credentials...</p>) : null
              }

            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
