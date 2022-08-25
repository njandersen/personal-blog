import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { createPost } from "../lib/firebase";
import { useContext } from "react";
import { AuthContext } from "../lib/context";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    title: "",
    slug: "",
    content: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const id = e.target.id;
    const newVal = e.target.value;

    setFormValues({ ...formValues, [id]: newVal });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for any missing values in form.
    let missingValue = [];
    Object.entries(formValues).forEach(([key, value]) => {
      if (!value) {
        missingValue.push(key);
      }
    });

    // Send an alert on what field are missing.
    if (missingValue.length > 1) {
      alert(`You're missing these fields: ${missingValue.join(", ")}`);
      return;
    }

    setIsLoading(true);

    createPost(formValues)
      .then(() => {
        setIsLoading(false);
        router.push("/");
      })
      .catch((err) => {
        alert(err);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    if (!user) router.push("/");
  }, [user]);

  return (
    <>
      <div className="card create-form">
        <form onSubmit={handleSubmit}>
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
          <button className="btn submit-btn" type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Post"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
