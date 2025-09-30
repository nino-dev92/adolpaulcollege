import { FaWhatsappSquare } from "react-icons/fa";
import "../Styles/whatsapp.css";
function Whatsapp() {
  return (
    <div className="whatsapp">
      <p>Chat on whatsapp</p>
      <a href="">
        <FaWhatsappSquare size={40} />
      </a>
    </div>
  );
}
export default Whatsapp;
