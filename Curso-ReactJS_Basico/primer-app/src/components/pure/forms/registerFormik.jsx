import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ROLES } from "../../../models/roles.enum";
import * as Yup from "yup";

//Models
import { User } from "../../../models/user.class";
//API for Login
/* const baseUrl = "https://manteliviano.com/acuasur/api/loginMovil1"; */
//API for Register
/* const baseUrl = "http://190.145.32.226:8000/api/register"; */

export default function Registerformik() {
  let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    rol: ROLES.USER,
  };
  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username Must be six charts")
      .max(12, "Username too long")
      .required("Username is required"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role: User / Admin")
      .required("Rol is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirm: Yup.string().when("password", {
      is: value => (value && value.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "¡Password must match!"),
    }),
  });

  const submit = (values) => {
    alert("Register user");
  };

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        // Yup validation schema
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {/* We obtain props from Formik */}
        {({values, // para obtener los valores del formulario en cualquier momento
            touched, // sirve para saber si el usuario ha tocado algún campo
            errors, // si hay algún error en algún campo o formulario en general
            isSubmitting, // dice si se envió o no el formulario
            handleChange, // sirve para saber si hay algún cambio en algún campo
            handleBlur // sirve para saber si hay algún cambio de foco
          }) => (
            <Form>
              <label htmlFor="username">Username</label>
              <Field id="username" name="username" placeholder="username" />
              {/* Username errors */}
              {errors.username && touched.username && (
                <div className="error">
                  <p>{errors.username} </p>
                </div>
              )}

              <label htmlFor="email">Email</label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
              />
              {/* Email errors */}
              {errors.email && touched.email && (
                <div className="error">
                  <p>{errors.email} </p>
                </div>
              )}

              {/* <label htmlFor="rol">Role</label>
              <Field id="rol" name="rol" placeholder="rol" /> */}

              <label htmlFor="password">Password</label>
              <Field id="password" type="password" name="password" placeholder="password" />

              {/* Password errors */}
              {errors.password && touched.password && (
                <div className="error">
                  <p>{errors.password} </p>
                </div>
              )}

              <label htmlFor="confirm">Password</label>
              <Field id="confirm" type="password" name="confirm" placeholder="confirm" />

              {/* confirm errors */}
              {errors.confirm && touched.confirm && (
                <div className="error">
                  <p>{errors.confirm}</p>
                </div>
              )}

              <button type="submit">Register Account</button>
              {isSubmitting ? <p>Sending your credentials...</p> : null}
            </Form>
          )
        }
      </Formik>
    </div>
  );
}
