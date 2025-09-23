import Header from "../components/Header";
import Slider from "../components/ImageSlider";
import CategoryList from "../components/CategoryList";
import WhyChoose from "../components/WhyChoose";
import Procedure from "../components/Procedure";
import FormContact from "../components/FormContact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Slider />
      <CategoryList />
      <WhyChoose />
      <Procedure />
      <FormContact />
    </>
  );
}

export default HomePage;
