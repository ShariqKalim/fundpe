import { auth, provider, database } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  const router = useRouter();
  const handleClick = () => {
    signInWithPopup(auth, provider).then(() => {
      sessionStorage.setItem("hackToken", "hackToken");
      toast.success("redirecting....", {
        position: "top-center",
      });
      router.push("/raise_funds");
    });
  };

  return (
    <div className="navbar">
      <img src="images/logo.png" alt="" />
      <div className="navbar_links">
        <a href="#donate">Donate</a>
        <button id="raise_fund_button" onClick={handleClick}>
          Raise fund
        </button>
        <a href="#About_content">About Us</a>
        <a href="#contact_head">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
