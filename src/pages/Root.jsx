import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Nơi render các route con (HomePage, Introduction...) */}
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
