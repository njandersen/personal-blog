import { useState } from "react";

const CreatePost = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    slug: "",
    content: "",
  });

  const handleChange = (e) => {
    const id = e.target.id;
    const newVal = e.target.value;

    setFormValues({ ...formValues, [id]: newVal });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="card create-form">
        <div className="header">
          <h1 className="createHello">Create a new post.</h1>
        </div>
        <div className="title-container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={formValues.title}
            onChange={handleChange}
          />
          <div className="slug-container">
            <label htmlFor="slug">Slug</label>
            <input
              id="slug"
              type="text"
              value={formValues.slug}
              onChange={handleChange}
            />
            <div className="content-container">
              <label hmtlFor="content">Content</label>
              <textarea
                id="content"
                value={formValues.content}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <button className="btn submit-btn" type="submit">
          Post
        </button>
      </div>
    </>
  );
};

export default CreatePost;
