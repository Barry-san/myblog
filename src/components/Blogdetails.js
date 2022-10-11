import { useParams } from "react-router-dom";
import getData from "../hooks/getData";

const Blogdetails = () => {
  const { id } = useParams();
  const details = getData(id);
  return (
    <div className="blogdetails">
      {details.pending && <div className="loading"></div>}
      {console.log(details)}
    </div>
  );
};

export default Blogdetails;
