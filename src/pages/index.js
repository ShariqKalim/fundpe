import About from "@/components/About";
import Contact from "@/components/Contact";
import Donate from "@/components/Donate";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

const index = () => {
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      sessionStorage.removeItem("token");
    }
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Donate />
      <Contact />
      <Footer />
    </>
  );
};

export default index;
