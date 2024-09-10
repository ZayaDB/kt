import Header from "../header/Header";
import Carousel from "../Carousel";
import "../../styles/main.css";
import Sidemenu from "../../components/sidemenu/Sidemenu";
import Footer from "../footer/Footer";

export default function Main() {
  return (
    <>
      <Header></Header>
      <Sidemenu></Sidemenu>
      <div className="cover">
        <Carousel></Carousel>
      </div>
      <Footer></Footer>
    </>
  );
}
