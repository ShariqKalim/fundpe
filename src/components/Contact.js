import { useState } from "react";
import { database } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const databaseRef = collection(database, "CONTACT");

  const PostData = (e) => {
    e.preventDefault();
    if (number.length != 10) {
      toast.error("invalid mobile number", {
        position: "top-center",
      });
      return;
    }
    if (name.length < 4) {
      toast.error("please write your full name", {
        position: "top-center",
      });
      return;
    }
    if (!(email.includes("@") && email.includes("."))) {
      toast.error("invalid email", {
        position: "top-center",
      });
      return;
    }

    addDoc(databaseRef, {
      name,
      email,
      number,
      message,
    })
      .then(() => {
        toast.success(
          "Thank you! We will reach out to you as soon as possible",
          {
            position: "top-center",
          }
        );
        setName("");
        setEmail("");
        setNumber("");
        setMessage("");
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1 id="contact_head">Contact Us</h1>

      <div className="contact_content">
        <div>
          <iframe
            className="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773189.599103063!2d61.032052269964!3d19.691629670706174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1680993401366!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="form_content">
          <form onSubmit={PostData}>
            <input
              type="text"
              value={name}
              placeholder="Full name"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <br />
            <input
              type="number"
              placeholder="Mobile number"
              id="mobile"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <br />
            <textarea
              value={message}
              name=""
              id=""
              cols="99"
              rows="8"
              placeholder="Message....."
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;
