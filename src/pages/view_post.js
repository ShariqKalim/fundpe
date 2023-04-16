import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const view_post = () => {
  const router = useRouter();
  const [postData, setPostData] = useState("");
  useEffect(() => {
    if (!sessionStorage.getItem("direct_view")) {
      const myValues = {
        name: "NA",
        purpose: "NA",
        occupation: "NA",
        productTitle: "NA",
        intro: "NA",
        amount: "NA",
        Ilink: "NA",
        Llink: "NA",
        message: "NA",
      };

      const myValuesString = JSON.stringify(myValues);

      sessionStorage.setItem("postData", myValuesString);
      router.push("/");
    }
    const storedData = sessionStorage.getItem("postData");
    const myData = JSON.parse(storedData);
    setPostData(myData);
  }, []);
  return (
    <>
      <a href="/" className="back_button">
        Back
      </a>
      <div className="view_main">
        <img src={postData["Ilink"]} alt="" />
        <p>post ID :- {postData["id"]}</p>

        <h1>Product name: {postData["productTitle"]}</h1>
        <div>
          <p>Product logo : </p>
          <img src={postData["Llink"]} alt="" />
        </div>
        <h1>Fund raiser's name : {postData["name"]}</h1>
        <p>Purpose : {postData["purpose"]}</p>
        <h2>Occupation : {postData["occupation"]}</h2>
        <h3>Amount : Rs. {postData["amount"]}</h3>
        <h4>
          <span>Description : </span> {postData["message"]}
        </h4>
        <a href="https://rzp.io/l/meT5XMZ">Donate Now</a>
      </div>
    </>
  );
};

export default view_post;
