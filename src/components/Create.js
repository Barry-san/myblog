import { useState, useContext } from "react";
import "../styles/Create.css";
import { db } from "../config/firebaseConfig";
import {
  collection,
  addDoc,
  connectFirestoreEmulator,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";

const Create = () => {
  const temp = localStorage.getItem("user");
  const user = JSON.parse(temp);
  const author = user.displayName;
  console.warn(author);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const blog = { title, description, content, author };
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
    console.log(blog);
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
