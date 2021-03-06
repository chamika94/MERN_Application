import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBCardGroup,
  MDBBtn,
  MDBIcon,
  MDBTooltip,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";




const CardTour = ({
  imageFile,
  description,
  title,
  tags,
  _id,
  name,
  
}) => {

  const excerpt = (str) => {
    if (str.length > 45) {
      str = str.substring(0, 45) + " ...";
    }
    return str;
  };


  return (
    <MDBCardGroup>
        <br></br>
      <MDBCard className="h-100 mt-2 d-md-flex" style={{ maxWidth: "20rem" }}>
        <MDBCardImage
         
          src={imageFile}
          alt={title}
          position="top"
          style={{ maxWidth: "100%", height: "180px", objectFit: 'cover'}}
        />
        <div className="top-left">{name}</div>
        <span className="text-start tag-card">
          {tags.map((tag) => (
            <Link key={tag} to={`#`}> #{tag}</Link>
          ))}
        </span>

        <MDBCardBody>
          <MDBCardTitle className="text-start">{title}</MDBCardTitle>

          <MDBCardText className="text-start">
            {excerpt(description)}
            <Link to={`/tour/${_id}`}>Read More</Link>
          </MDBCardText>

        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
  );
};

export default CardTour;
