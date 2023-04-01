import React, { useState } from "react";
import Header from "../../components/header/Header";
import { Container, Wrapper, FormContainer } from "./AddPost.styles";
import { useFormik } from "formik";
import { submitPost } from "../../core/apiCalls";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.title || values.title.trim().length < 1) {
        errors.title = "title is required";
      }
      if (!values.body || values.body.trim().length < 1) {
        errors.body = "body is required";
      }
      return errors;
    },
    onSubmit: (values) => {
      submitPost(values);
      setShowForm(false);
      formik.values.title = formik.initialValues.title;
      formik.values.body = formik.initialValues.body;
      navigate("/posts");
    },
  });

  return (
    <Wrapper>
      <Header setShowForm={setShowForm} />
      <Container>
        <h2>
          Click
          <button className="add" onClick={() => setShowForm(true)}>
            +
          </button>
          to add post
        </h2>
      </Container>
      {showForm && (
        <FormContainer>
          <form onSubmit={formik.handleSubmit} className="add-form">
            <h3>Add New Post</h3>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            {formik.touched?.title && formik.errors?.title ? (
              <span className="error">{formik.errors?.title}</span>
            ) : null}

            <label htmlFor="body">Body</label>
            <textarea
              id="body"
              name="body"
              rows="4"
              cols="50"
              onChange={formik.handleChange}
              value={formik.values.body}
            />
            {formik.touched.body && formik.errors?.body ? (
              <span className="error">{formik.errors?.body}</span>
            ) : null}

            <button type="submit">Submit</button>
          </form>
        </FormContainer>
      )}
    </Wrapper>
  );
};

export default AddPost;
