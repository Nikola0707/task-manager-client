import Cookies from "js-cookie";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const UserProfile = ({ userAvatarUrl, userInfo, setUserAvatarUrl }) => {
  const [selectedFile, setSelectedFile] = useState();

  let history = useHistory();

  // Handle User Image input
  const handleImageInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Upload Avatar
  const uploadAvatar = (e) => {
    const formData = new FormData();
    formData.append("avatar", selectedFile);

    fetch(`${process.env.REACT_APP_API_URL}/users/me/avatar`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
      body: formData,
    })
      .then((response) => setUserAvatarUrl(response.url))
      .catch((e) => console.log(e));
  };

  // Log Out and remove token and user info from cookies
  const signOut = () => {
    fetch(`${process.env.REACT_APP_API_URL}/users/me/avatar/users/logout`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => {
        Cookies.remove("token");
        Cookies.remove("user");
        Cookies.remove("id");
        history.push("/");
      })
      .catch((e) => console.log(e));
  };

  // Remove Account
  const removeAcc = () => {
    fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then(() => {
        Cookies.remove("token");
        Cookies.remove("user");
        Cookies.remove("id");
        history.push("/");
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="user-profle-container">
      <div className="user-name-and-avatar">
        <div className="user-name-and-avatar-container">
          <img src={userAvatarUrl} alt="Avatar" />
          <p className="user-name">{userInfo.name}</p>
        </div>
        <div className="user-profile-content">
          <p>
            <span>Name:</span> {userInfo.name}
          </p>
          <p>
            <span>Email:</span> {userInfo.email}
          </p>
          <p className="flex-grow">
            <span>Age: </span>
            {userInfo.age}
          </p>
          <div className="upload-avatar">
            <div style={{ marginBottom: "10px" }}>
              <label htmlFor="avatar">Upload Avatar</label>
            </div>
            <input
              type="file"
              name="avatar"
              id="avatar"
              accept="image/*"
              onChange={handleImageInput}
            />
            <button onClick={() => uploadAvatar()}>Upload</button>
          </div>
        </div>
        <div className="user-profile-footer">
          <div>
            <button onClick={() => signOut()}>Log Out</button>
          </div>
          <div>
            <button onClick={() => removeAcc()}>Remove Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
