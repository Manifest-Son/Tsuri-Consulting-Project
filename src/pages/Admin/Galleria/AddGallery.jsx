/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Galleria.css";
import { storage, addGalleryItem } from "../../../utils/firebase.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";
import { useNavigate } from "react-router-dom";

function AddGallery() {
  const [uploading, setUploading] = useState(false); //Managing our submit states
  const navigate = useNavigate();

  // Setting up validation for our form
  const validationSchema = Yup.object({
    picture: Yup.mixed().required("A picture is required"),
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    date: Yup.date().required("Date is required"),
  });

  //Initializing our form values
  const initialValues = {
    picture: null,
    title: "",
    description: "",
    date: new Date().toISOString().split('T')[0], // Today's date as default
  };

  //Handling the form values where Firebase API is called to store the data
  const onSubmit = async (values, { resetForm }) => {
    try {
      setUploading(true);
      const file = values.picture;
      const storageRef = ref(storage, `gallery/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done.`);
        },
        (error) => {
          console.error("Upload error:", error);
          toast("Failed to upload the image.", { theme: "failure" });
          setUploading(false);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            await addGalleryItem({
              imageUrl: downloadURL,
              title: values.title,
              description: values.description,
              date: new Date(values.date).toISOString(),
            });
            
            toast("Gallery added successfully", { theme: "success" });
            resetForm();
            navigate("/admin");
          } catch (error) {
            console.error("Error adding gallery item:", error);
            toast("Failed to save gallery item.", { theme: "failure" });
          } finally {
            setUploading(false);
          }
        }
      );
    } catch (err) {
      console.error("Error in upload process:", err);
      toast("Failed to process the image.", { theme: "failure" });
      setUploading(false);
    }
  };

  //Formik intergrating every function to manage the form
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <section className="galleria_section">
      <h1>Add Collections here.</h1>
      <div className="galleria_wrapper">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="picture">Insert the image: </label>
          <input
            type="file"
            name="picture"
            id="picture"
            onBlur={formik.handleBlur}
            onChange={(event) => {
              formik.setFieldValue("picture", event.currentTarget.files[0]);
            }}
          />
          {formik.touched.picture && formik.errors.picture && (
            <p>{formik.errors.picture}</p>
          )}

          <label htmlFor="title">Image Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <p>{formik.errors.title}</p>
          )}

          <label htmlFor="date">Date Taken:</label>
          <input
            type="date"
            name="date"
            id="date"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          {formik.touched.date && formik.errors.date && (
            <p>{formik.errors.date}</p>
          )}

          <label htmlFor="description">Attach some words to the image:</label>
          <textarea
            name="description"
            id="description"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}
          ></textarea>
          {formik.touched.description && formik.errors.description && (
            <p>{formik.errors.description}</p>
          )}

          <button type="submit" disabled={uploading}>
            {uploading ? "Uploading..." : "Publish"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddGallery;
