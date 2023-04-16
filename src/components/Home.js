import { auth, provider } from "../../firebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = () => {
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
    <>
      <div className="main_home">
        <h1>India's No. 1 Crowdfunding Platform</h1>
        <p>
          We provide a platform to the fundraisers to raise funds for their
          products and a platform for the donators to donate their funds for
          products
        </p>
        <div>
          <button id="home_raise_fund_button" onClick={handleClick}>
            raise funds
          </button>
          <a href="#donate">Donate</a>
        </div>
      </div>
    </>
  );
};

export default Home;
