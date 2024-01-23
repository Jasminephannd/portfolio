import { Col } from "react-bootstrap";

export const CertificateCard = ({ title, date, imgUrl, certUrl }) => {
    const handleClick = () => {
        console.log("Clicked");
        window.open(certUrl, "_blank", "noopener noreferrer");
        };
  return (
    <Col size={12} sm={6} md={4}>
      <div className="qual-imgbx" onClick={handleClick} >
        <img src={imgUrl} alt={title}/>
        <div className="qual-txtx">
          <h4>{title}</h4>
          <span>{date}</span><br/>
        </div>
      </div>
    </Col>
  )
}