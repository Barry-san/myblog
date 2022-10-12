import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../hooks/getData";

const Blogdetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState();
  useEffect(() => {
    const blog = getData(id);
    setDetails(blog.docu);
  });
  return (
    <div className="blogdetails">
      {/* {details.pending && <div className="loading"></div>} */}
      {console.log(details)}
    </div>
  );
};

export default Blogdetails;
