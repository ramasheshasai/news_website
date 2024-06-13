import React from 'react';
import image from './images.png'; 
import './style.css';

const Newsitem = ({ title, description, src, url }) => {
    return (
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-2" style={{ 
          maxWidth: "345px",
          borderRadius: "15px", // Rounded corners
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" // Drop shadow
        }}>
        <img src={src ? src : image} className="card-img-top" alt="News" style={{ 
            height: "200px", 
            width: "100%", 
            objectFit: "cover", 
            borderTopLeftRadius: "15px", // Rounded corners for image
            borderTopRightRadius: "15px",
            backgroundColor: src ? "transparent" : "#e0e0e0"
          }} />
        <div className="card-body" style={{ padding: "1.5rem" }}>
          <h5 className="card-title" style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{title.slice(0, 50)}</h5>
          <p className="card-text" style={{ fontSize: "1rem" }}>{description ? description.slice(0, 90) : "There is no information about what just happened in this news point."}</p>
          <a href={url} className="btn btn-primary" style={{ 
              backgroundColor: "#007bff", // Primary button color
              borderColor: "#007bff",
              borderRadius: "5px" // Rounded corners for buttons
            }}>Read more</a>
        </div>
      </div>
    );
}

export default Newsitem;
