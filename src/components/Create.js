import { useState, useContext } from "react";
import "../styles/Create.css";
import { db } from "../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";
import Profile from "./Profile";

const Create = () => {
  const user = useContext(userContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const author = user ? user.email : null;
  const blog = { title, description, content, author: author };
  const navigate = useNavigate();
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
  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collection(db, "blogs"), blog)
      .then(console.log("done with that"))
      .catch((err) => {
        alert(err.message);
      });
    navigate("/");
  };
  return (
    <div className="create">
      <form>
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
          <input type="file"></input>
        </div>
        <button onClick={handleSubmit}>submit</button>
      </form>
      <Profile />
    </div>
  );
};

export default Create;
