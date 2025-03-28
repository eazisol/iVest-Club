import React, { useRef,useEffect } from "react";
import { Avatar } from "../Common/Icons";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { appData } from "../Context/AppContext";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { imgUrl } from "../../../apiConfig";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
const ProfileCard = ({ enableEdit, profilePic, setProfilePic, prevPic }) => {

  const { handleLogout,userData,showPassword, setShowPassword,setSnackBarData, } = appData();
  const location = useLocation();
  const navigate = useNavigate();
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // Get the selected file
    const maxSize = 3 * 1024 * 1024; // 3 MB in bytes
    
    if (file) {
      if (file.size > maxSize) {
      
        setSnackBarData({
          visibility: true,
          error: "error",
          text: "File size exceeds 3 MB. Please upload a smaller file.",
        });
        return; // Stop further processing if the file is too large
      }
  
      console.log("Selected file:", file);
      setProfilePic(file);
      // You can process the file further here (e.g., upload it to a server)
    }
  };
  const fileInputRef = useRef(null);

  // Function to handle button click and trigger file input click
  const handleButtonClick = () => {
    console.log("Selected file:");
    fileInputRef.current.click(); // This will trigger the hidden file input
  };


  

  return (
    <div className="card card-border-c">
      <div className="w-100 d-flex flex-column align-items-center justify-content-center mt-5">
        {/* <img src="/src/dash.png" alt="dashPic" /> */}

        {profilePic ? (
          <div>
            {profilePic ? (
              <img
                src={URL.createObjectURL(profilePic)}
                alt="Profile Preview"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
              />
            ) : (
              <AccountCircleOutlinedIcon
                sx={{ color: "#ccc", fontSize: 100 }}
              />
            )}
          </div>
        ) : (
          <>
            {userData.profile ||prevPic ? (
              <img
                src={imgUrl + (userData.profile ||prevPic)}
                alt="Profile Preview"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                }}
              />
            ) : (
              <AccountCircleOutlinedIcon
                sx={{ color: "#ccc", fontSize: 100 }}
              />
            )}
          </>
        )}
        {!enableEdit && (
          <DriveFileRenameOutlineOutlinedIcon
            sx={{ cursor: "pointer" }}
            onClick={handleButtonClick}
          />
        )}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept="image/*" // Allows only image files
          onChange={handleFileChange} // Handle file selection
        />
      </div>
      <div className="w-100 text-center mt-2">
        <div className="profileName pop-font DarkText bold-5">{userData.username}</div>
      </div>
      <div className="w-100 mt-2 mb-5 text-center LightText">
        {userData.email}
      </div>

      <button
        className={
          location.pathname == "/Dashboard" ? "dashBtn btn-active" : "dashBtn  "
        }
        onClick={() => {
          setShowPassword(false)
          navigate("/Dashboard");
        }}
      >
        <i className="fa-solid fa-wallet LightText-2 dashCardIcon"></i> &nbsp;{" "}
        <span className="dashCardText bold-6 LightText-2"> My Wallet</span>
      </button>
      <button
        className={
          location.pathname == "/Dashboard/MyMemberShipClubs"
            ? "dashBtn btn-active"
            : "dashBtn  "
        }
        onClick={() => {
          setShowPassword(false)
          navigate("/Dashboard/MyMemberShipClubs");
        }}
      >
        <i className="fa-regular LightText-1 dashCardIcon fa-address-card"></i>
        &nbsp;{" "}
        <span className="dashCardText bold-5 LightText-1">
          {" "}
          My Membership Club
        </span>
      </button>
      <button
        className={
          location.pathname == "/Dashboard/MyAccount"&& !showPassword
            ? "dashBtn btn-active"
            : "dashBtn  "
        }
        onClick={() => {
          setShowPassword(false)
          navigate("/Dashboard/MyAccount");
        }}
      >
        <i className="fa-regular fa-user LightText-1 dashCardIcon"></i> &nbsp;
        <span className="dashCardText LightText-1 bold-5"> My Account</span>
      </button>
      <button
        className={
           showPassword
            ? "dashBtn btn-active"
            : "dashBtn  "
        }
        onClick={() => {
          setShowPassword(true)
          navigate("/Dashboard/MyAccount");
        }}
      >
        <i className="fa-solid fa-lock LightText-1 dashCardIcon"></i> &nbsp;
        <span className="dashCardText LightText-1 bold-5"> Change Password</span>
      </button>
      <button
        className="dashBtn"
        onClick={() => {
          navigate("/");
          handleLogout();
        }}
      >
        <i className="fa-solid dashCardIcon LightText-1 fa-arrow-right-from-bracket"></i>
        &nbsp;
        <span className="dashCardText LightText-1 bold-5"> Log Out</span>
      </button>
    </div>
  );
};

export default ProfileCard;
