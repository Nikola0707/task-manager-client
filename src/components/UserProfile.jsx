import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState("");
  const [userAvatarUrl, setUserAvatarUrl] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  let history = useHistory();
  const userId = Cookies.get("id");

  //   Get User profile info
  const myProfile = async () => {
    await fetch(`https://nikola-task-manager-app.herokuapp.com/users/me`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    })
      .then((response) => response.json())
      .then((data) => setUserInfo(data))
      .catch((e) => console.log(e));
  };

  // Fetch user avatar
  const userAvatar = async () => {
    await fetch(
      `https://nikola-task-manager-app.herokuapp.com/users/${userId}/avatar`,
      {
        method: "GET",
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      }
    )
      .then((response) => setUserAvatarUrl(response.url))
      .catch((e) => console.log(e));
  };

  // Handle User Image input
  const handleImageInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // Upload Avatar
  const uploadAvatar = (e) => {
    const formData = new FormData();
    formData.append("avatar", selectedFile);

    fetch("https://nikola-task-manager-app.herokuapp.com/users/me/avatar", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
      body: formData,
    })
      .then((response) => console.log(response))
      .then(() => userAvatar())
      .catch((e) => console.log(e));
  };

  // Log Out and remove token and user info from cookies
  const signOut = () => {
    fetch("https://nikola-task-manager-app.herokuapp.com/users/logout", {
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

  useEffect(() => {
    userAvatar();
    myProfile();
  }, []);   

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
            <label htmlFor="avatar">Upload Avatar</label>
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
            <button>Remove Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
