/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, database } from "../../../utils/firebase.js";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";
import useStore from "../../../store/store.js";

function Login() {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  const validationSchema = Yup.object({
    emailAddress: Yup.string()
      .required("Email Address is required")
      .email("Enter a valid Email"),
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Enter password with more than 8 characters")
      .max(15, "Enter a password less than 15 characters"),
  });

  const initialValues = {
    emailAddress: "email@example.com",
    password: "12345678",
  };

  const onSubmit = async (values, { resetForm }) => {
    try {
      setLogin(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.emailAddress,
        values.password,
      );
      const user = userCredential.user;

      // Fetch the user's role from Firestore
      const userRef = doc(database, "users", user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        setUser({
          uid: user.uid,
          email: user.email,
          role: userData.role, // Assume role is stored in Firestore
        });

        if (userData.role === "admin") {
          toast("Login Successful", { theme: "success", duration: 3000 });
          navigate("/admin");
        } else {
          toast("Access Denied: Admins Only", {
            theme: "failure",
            duration: 3000,
          });
          navigate("/");
        }
      }

      resetForm();
      setLogin(false);
    } catch (error) {
      toast("User credentials are not matching", {
        theme: "failure",
        duration: 3000,
      });
      setLogin(false);
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <>
      <section className="login_section">
        <div className="login_wrapper">
          <h1>Log In</h1>
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="emailAddress">Email Address: </label>
            <input
              type="email"
              name="emailAddress"
              value={formik.values.emailAddress}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            <button type="submit" disabled={login} aria-busy={login}>
              {login ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
