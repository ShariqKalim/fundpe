import { useState, useEffect } from "react";
import { database } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="isLoading">
      <CircularProgress />
    </div>
  );
};

const Donate = () => {
  const router = useRouter();
  const [res, setRes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const databaseRef = collection(database, "RAISE FUNDS");

  const handleViewPost = (postId, postData) => {
    sessionStorage.setItem("direct_view", "full");
    const dataWithId = { ...postData, id: postId };
    sessionStorage.setItem("postData", JSON.stringify(dataWithId));
    router.push("/view_post");
  };

  const redirectDonate = () => {
    window.location = "https://rzp.io/l/meT5XMZ";
  };

  const getData = async () => {
    setIsLoading(true);
    const snapshot = await getDocs(databaseRef);
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setRes(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div id="donate">
        <h1>Posts</h1>
        {isLoading ? (
          <Loading />
        ) : (
          <div className="sub_donate">
            {res.map((data) => {
              return (
                <div key={data.id} className="donate_cards">
                  <div className="progress-bar-container">
                    <h2>{data.productTitle}</h2>
                    <p>{data.intro}</p>
                    <div>
                      <img src={data.Llink} alt="icon" />
                      <h3>Rs. {data.amount}</h3>
                    </div>
                  </div>
                  <div id="donate_funds_buttons">
                    <button onClick={() => handleViewPost(data.id, data)}>
                      View
                    </button>
                    <button onClick={redirectDonate}>Donate</button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Donate;
