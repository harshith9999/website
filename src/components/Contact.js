import Footer from "./Footer";
import Mail from "./Mailchimp";
import NavigationBar from "./Navbar/Navbar";

function Contact() {
  return (
    <div className="d-flex flex-column justify-content-between h-100">
      <div>
        <NavigationBar />
        <div className="d-flex justify-content-center mb-4">
          <Mail />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
