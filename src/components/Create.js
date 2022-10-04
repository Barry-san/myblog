import { useState } from "react";
import "../styles/Create.css";

const Create = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const handleTitle = (e) => {
    let input = e.target.value;
    setTitle(input);
  };
  const handleDescription = (e) => {
    let input = e.target.value;
    setDescription(input);
  };
  const handleContent = (e) => {
    let input = e.target.value;
    setContent(input);
  };
  return (
    <div className="create">
      <form action="POST">
        <div className="text-group">
          <label>Blog Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={handleTitle}
            onFocus={console.log("focus")}
          />
        </div>
        <div className="text-group">
          <label>Description</label>
          <input
            type="text"
            required
            value={description}
            onChange={handleDescription}
          />
        </div>
        <div className="text-group">
          <label> Content</label>
          <textarea
            name="content"
            cols="30"
            rows="10"
            required
            value={content}
            onChange={handleContent}
          ></textarea>
        </div>
        <button>submit</button>
      </form>
    </div>
  );
};

export default Create;
