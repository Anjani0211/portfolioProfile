import { useState } from "react";
import "../App.css";
function ProfileCard(props) {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        style={{
          border: "2px solid #ccc",
          padding: "15px",
          borderRadius: "10px",
          width: "250px",
          margin: "10px",
          backgroundColor: isHovered ? "#f0f0f0" : "white",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
         <img src={props.image} alt={props.name} className="profile-image" />
        <h2>{props.name}</h2>
        <p><strong>Role:</strong> {props.role}</p>
        <p><strong>Location:</strong> {props.location}</p>
      </div>
    );
  }
  // ✅ Default Props Set Karna
ProfileCard.defaultProps = {
  name: "Unknown User",
  role: "No Role Assigned",
  location: "Not Specified",
  image: "https://via.placeholder.com/80", // Default Placeholder Image
};
  export default ProfileCard;
   