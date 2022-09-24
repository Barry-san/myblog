import { auth } from "../config/firebaseConfig";

function Profile() {
  return (
    <div className="profile">
      <p>UserName: {auth.currentUser.displayName}</p>
      <br />
      <p>Email: {auth.currentUser.email}</p>
    </div>
  );
}

export default Profile;
