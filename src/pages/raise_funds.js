import TextField from "@mui/material/TextField";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { app, database } from "../../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const raise_funds = () => {
  const databaseRef = collection(database, "RAISE FUNDS");
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [occupation, setOccupation] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [intro, setIntro] = useState("");
  const [amount, setAmount] = useState("");
  const [Ilink, setILink] = useState("");
  const [Llink, setLLink] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();
  const PostData = (e) => {
    e.preventDefault();

    //form validation
    if (name.length < 4) {
      toast.error("invalid name", {
        position: "top-center",
      });
      return;
    }
    if (purpose.length < 10) {
      toast.error("write the purpose properly", {
        position: "top-center",
      });
      return;
    }
    if (occupation.length < 4) {
      toast.error("write your occupation properly", {
        position: "top-center",
      });
      return;
    }
    if (productTitle.length < 10) {
      toast.error("complete product name is required", {
        position: "top-center",
      });
      return;
    }
    if (amount.length < 4) {
      toast.error("Amount must be minimum Rs. 1000", {
        position: "top-center",
      });
      return;
    }
    if (message.length < 20) {
      toast.error("description cannot be less than 20 Characters", {
        position: "top-center",
      });
      return;
    }
    addDoc(databaseRef, {
      name,
      purpose,
      occupation,
      productTitle,
      intro,
      amount,
      Ilink,
      Llink,
      message,
    })
      .then(() => {
        // alert("done");
        sessionStorage.setItem("token", "my_token");
        router.push("/successfunds");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (!sessionStorage.getItem("hackToken")) {
      router.push("/");
    }
  }, []);

  return (
    <>
      <a href="/" className="back_button">
        Back
      </a>
      <h1 id="raise">Raise Funds</h1>
      <p id="raise_details">Fill the details properly to avoid rejections!</p>
      <div className="raise_form">
        <form onSubmit={PostData}>
          <div className="raise_form_1">
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              required
            />{" "}
            <br />
            <TextField
              id="outlined-basic"
              label="Purpose for fund raise"
              variant="outlined"
              onChange={(e) => setPurpose(e.target.value)}
              required
            />
          </div>
          <div className="raise_form_2">
            <TextField
              id="outlined-basic"
              label="Occupation"
              variant="outlined"
              onChange={(e) => setOccupation(e.target.value)}
              required
            />{" "}
            <br />
            <TextField
              id="outlined-basic"
              label="Product Title"
              variant="outlined"
              onChange={(e) => setProductTitle(e.target.value)}
              required
            />
          </div>
          <div className="raise_form_3">
            <TextField
              id="outlined-basic"
              label="Small Intro"
              variant="outlined"
              onChange={(e) => setIntro(e.target.value)}
              required
            />{" "}
            <br />
            <TextField
              id="outlined-number"
              label="Amount"
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>{" "}
          <TextField
            id="outlined-basic"
            label="Google Drive Image Link(public access) size : h : 200px, w: 700px"
            variant="outlined"
            className="drive_link"
            onChange={(e) => setILink(e.target.value)}
            required
          />{" "}
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Google Drive Logo Link(public access)"
            variant="outlined"
            className="drive_link"
            onChange={(e) => setLLink(e.target.value)}
            required
          />{" "}
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Description"
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button>Submit</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default raise_funds;
