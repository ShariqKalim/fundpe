import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const successfunds = () => {
  const router = useRouter();
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      router.push("/");
    }
  }, []);

  const redirectToHome = () => {
    router.push("/");
  };

  return (
    <>
      <div className="success_funds_main">
        <h1>Done!</h1>
        <CheckCircleIcon id="successIcon" />

        <p>
          Note : Our team will reveiew your post and if any misleading content
          is find then your post will be removed from our website
        </p>
        <p id="request_no">contact :-sample@sample.com</p>
        <button onClick={redirectToHome} id="back_home">
          &larr;&nbsp;&nbsp;Back Home
        </button>
      </div>
    </>
  );
};

export default successfunds;
