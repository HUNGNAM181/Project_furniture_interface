import { useEffect, useState } from "react";
import classes from "./ImageSlider.module.css";

const images = [
  "/phong_khach/2.jpg",
  "/phong_bep/6.jpg",
  "/phong_khach/3.jpg",
  "/phong_ngu/7.jpg",
  "/phong_bep/7.jpg",
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Chuyển ảnh trước
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Chuyển ảnh sau
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={classes.slider}>
      <div
        className={classes.sliderinner}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img key={index} src={img} alt={`slide-${index}`} />
        ))}
      </div>
      {/* Nút điều hướng */}
      <button className={classes.prev} onClick={prevSlide}>
        &#10094;
      </button>
      <button className={classes.next} onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
