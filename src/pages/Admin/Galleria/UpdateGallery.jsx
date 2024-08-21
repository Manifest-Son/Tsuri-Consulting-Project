// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { database, storage } from "../../../utils/firebase.js";
import "./Galleria.css";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/success.css";
import "react-simple-toasts/dist/theme/failure.css";

export default function UpdateGallery() {
  const { id } = useParams(); // Get the id from the URL
  const [initialValues, setInitialValues] = useState({
    picture: null,
    title: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Fetch the current gallery item data using the id
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const itemDoc = doc(database, "gallery", id);
        const itemSnapshot = await getDoc(itemDoc);
        if (itemSnapshot.exists()) {
          const item = itemSnapshot.data();
          setInitialValues({
            picture: null,
            title: item.title,
            description: item.description,
          });
        } else {
          console.error("Item not found");
        }
      } catch (error) {
        console.error("Error fetching item:", error);
        toast("An Error occured", { theme: "failure", duration: 2000 });
      }
    };

    fetchItem();
  }, [id]);

  // Form submission handler
  const onSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    try {
      let downloadURL = null;

      if (values.picture) {
        const storageRef = ref(storage, `gallery/${values.picture.name}`);
        const uploadTask = uploadBytesResumable(storageRef, values.picture);

        await new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload is ${progress}% done.`);
            },
            (error) => {
              console.error("Upload error:", error);
              reject(error);
            },
            async () => {
              downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              resolve();
            },
          );
        });
      } else {
        // Use existing image URL if no new image is provided
        const itemDoc = doc(database, "gallery", id);
        const itemSnapshot = await getDoc(itemDoc);
        downloadURL = itemSnapshot.data().imageUrl;
      }

      await updateDoc(doc(database, "gallery", id), {
        title: values.title,
        description: values.description,
        imageUrl: downloadURL,
      });

      toast("Gallery item updated successfully!", {
        theme: "success",
        duration: 3000,
      });
      resetForm();
      navigate("/admin/galleria"); // Redirect to gallery listing
    } catch (error) {
      console.error("Error updating gallery item:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Initialize formik with the fetched initial values
  const formik = useFormik({
    enableReinitialize: true, // Important to enable formik to reset values when initialValues change
    initialValues,
    onSubmit,
  });

  return (
    <section className="updategallery_section">
      <h1>Update Gallery</h1>
      <p>
        With the details below, kindly update the gallery. When done, click on
        the update button.
      </p>
      <div className="update_wrapper">
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="picture">Insert the image:</label>
          <input
            type="file"
            name="picture"
            id="picture"
            onBlur={formik.handleBlur}
            onChange={(event) => {
              formik.setFieldValue("picture", event.currentTarget.files[0]);
            }}
            aria-label="Insert the image"
          />

          <label htmlFor="title">Image Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.title}
            aria-label="Image Title"
          />
          {formik.touched.title && formik.errors.title && (
            <p>{formik.errors.title}</p>
          )}

          <label htmlFor="description">Attach some words to the image:</label>
          <textarea
            name="description"
            id="description"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.description}
            aria-label="Attach some words to the image"
          />
          {formik.touched.description && formik.errors.description && (
            <p>{formik.errors.description}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </section>
  );
}
