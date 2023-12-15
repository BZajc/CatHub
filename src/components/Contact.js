import {
  AiOutlineUser,
  AiFillPhone,
  AiFillMail,
  AiFillMessage,
} from "react-icons/ai";
import {
  FaPinterestSquare,
  FaTwitterSquare,
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTumblrSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
function Contact() {
  return (
    <div className="footer__contact">
      {/* Inputs for contact */}
      <div className="footer__contact-box footer__contact-box--email">
        <div className="footer__contact-inputs">
          <div className="footer__contact-input-box">
            <div className="footer__contact-input-icon">
              <AiOutlineUser className="footer__contact-icon" />
            </div>
            <div className="footer__contact-input">
              <input placeholder="Nickname" />
            </div>
          </div>
          <div className="footer__contact-input-box">
            <div className="footer__contact-input-icon">
              <AiFillPhone className="footer__contact-icon" />
            </div>
            <div className="footer__contact-input">
              <input placeholder="Phone number" />
            </div>
          </div>
          <div className="footer__contact-input-box">
            <div className="footer__contact-input-icon">
              <AiFillMail className="footer__contact-icon" />
            </div>
            <div className="footer__contact-input">
              <input placeholder="Email" />
            </div>
          </div>
          <div className="footer__contact-input-box">
            <div className="footer__contact-input-icon">
              <AiFillMessage className="footer__contact-icon" />
            </div>
            <div className="footer__contact-input">
              <textarea placeholder="Message" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact data */}
      <div className="footer__contact-box footer__contact-box--data">
        <div className="footer__contact-split-box">
          <p className="footer__contact-data">Address:</p>
          <p className="footer__contact-data">
            123 Paw Street, Randomcity 12-345, Easter Land
          </p>
        </div>
        <div className="footer__contact-split-box">
          <p className="footer__contact-data">Telephone:</p>
          <p className="footer__contact-data">
            <a href="tel:+48123456789">+48 123 456 789</a>
          </p>
        </div>
        <p className="footer__contact-data">
          E-mail: <a href="mailto:kontakt@example.com">cathub@contact.com</a>
        </p>
        <div className="footer__contact-follow-text">FOLLOW US</div>
        <div className="footer__contact-follow-icons">
          <div className="footer__contact-follow-wrapper">
            <div className="footer__contact-follow-link-box">
              <a href="https://google.com/">
                <FaPinterestSquare className="footer__contact-follow-icon footer__contact-follow-icon--pinterest" />
              </a>
            </div>
            <div className="footer__contact-follow-link-box">
              <a href="https://google.com/">
                <FaTwitterSquare className="footer__contact-follow-icon footer__contact-follow-icon--twitter" />
              </a>
            </div>
            <div className="footer__contact-follow-link-box">
              <a href="https://google.com/">
                <FaFacebookSquare className="footer__contact-follow-icon footer__contact-follow-icon--facebook" />
              </a>
            </div>
            <div className="footer__contact-follow-link-box">
              <a href="https://google.com/">
                <FaYoutubeSquare className="footer__contact-follow-icon footer__contact-follow-icon--youtube" />
              </a>
            </div>
            <div className="footer__contact-follow-link-box">
              <a href="https://google.com/">
                <FaTumblrSquare className="footer__contact-follow-icon footer__contact-follow-icon--tumblr" />
              </a>
            </div>
            <div className="footer__contact-follow-link-box">
              <a href="https://google.com/">
                <FaWhatsappSquare className="footer__contact-follow-icon footer__contact-follow-icon--whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
