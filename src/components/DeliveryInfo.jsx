import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import PhoneIcon from "@mui/icons-material/Phone";
import "../styles/DeliveryInfo.css";

function DeliveryInfo() {
  return (
    <div className="info-section">

      <div className="box">
        <LocalShippingIcon />
        <h3>Delivery Information</h3>

        <p>Monday - Sunday</p>
        <p>10:00 AM - 10:00 PM</p>
      </div>

      <div className="box">
        <PhoneIcon />
        <h3>Contact Information</h3>

        <p>+91 9876543210</p>
        <p>foodorder@gmail.com</p>
      </div>

    </div>
  );
}

export default DeliveryInfo;