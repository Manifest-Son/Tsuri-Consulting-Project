/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./Profile.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { app, database, storage } from "../../../utils/firebase.js";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";
import useStore from "../../../store/store.js"; // Assuming you have a Zustand store

function Profile() {
  const [loading, setLoading] = useState(false);
  const { user } = useStore(); // Accessing the logged-in user from Zustand
  const [image, setImage] = useState(null); // State to manage selected image
  const [imageURL, setImageURL] = useState(""); // State to manage the image URL

  console.log(user);
  const validationSchema = Yup.object({
    name: Yup.string().required("The name is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    position: "",
  };

  // Fetch user data on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userRef = doc(database, "users", user.uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          formik.setValues({
            name: userDoc.data().name || "",
            email: userDoc.data().email || "",
            position: userDoc.data().position || "",
          });
          setImageURL(userDoc.data().photoURL || "");
        }
      }
    };

    fetchUserData();
    console.log(fetchUserData());
  }, [user]);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const imagePreviewURL = URL.createObjectURL(file);
      setImageURL(imagePreviewURL); // Show a preview of the selected image
    }
  };

  const uploadImage = async (file) => {
    const imageRef = ref(storage, `profile_pictures/${user.uid}`);
    await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(imageRef);
    return downloadURL;
  };

  const onSubmit = async (values) => {
    try {
      setLoading(true);

      let photoURL = imageURL;

      // If a new image is selected, upload it and get the download URL
      if (image) {
        photoURL = await uploadImage(image);
      }
      const userRef = doc(database, "users", user.uid);
      await updateDoc(userRef, {
        name: values.name,
        email: values.email,
        position: values.position,
        photoURL: photoURL,
      });
      toast("Profile updated successfully", {
        theme: "success",
        duration: 3000,
      });
      setLoading(false);
    } catch (err) {
      toast(
        "An error occurred while updating your profile. Please try again.",
        {
          theme: "failure",
          duration: 3000,
        },
      );
      setLoading(false);
    }
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <>
      <section>
        <div className="profile_wrapper">
          <form onSubmit={formik.handleSubmit}>
            <div className="profile_img">
              {imageURL && (
                <div className="image_preview">
                  <img src={imageURL} alt="Profile Preview" />
                </div>
              )}
              <label htmlFor="profile_picture">Profile Picture:</label>
              <input
                type="file"
                name="profile_picture"
                id="profile_picture"
                onChange={handleImageChange}
                accept="image/*"
              />
            </div>
            <div className="profile_info">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name && (
                <p>{formik.errors.name}</p>
              )}
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                disabled // Disable editing email for now
              />
              <label htmlFor="position">Position:</label>
              <input
                type="text"
                name="position"
                id="position"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.position}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Updating Profile..." : "Update Profile"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Profile;
