import { useRef } from "react";

import CategoryList from "./components/CategoryList";
import Footer from "./components/Footer";
import FormContact from "./components/FormContact";
import Header from "./components/Header";
import Slider from "./components/ImageSlider";

import Procedure from "./components/Procedure";
import WhyChoose from "./components/WhyChoose";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Header />
      <Slider />
      <CategoryList />
      <WhyChoose />
      <Procedure />
      <FormContact />

      <Footer />
    </>
  );
}

export default App;
