import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop"; // ✅ import thêm

function RootLayout() {
  return (
    <>
      {/* ScrollToTop phải nằm bên trong Router context */}
      <ScrollToTop />
      <Header />
      <main>
        <Outlet /> {/* Nơi render các route con (HomePage, Introduction...) */}
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
