import Lottie from "lottie-react";
import React from "react";
import carLoadingAnimation from "./car.json";
import style from "./style.module.css";
const CarLoading: React.FC = () => {
  return (
    <div className={style.container}>
      <Lottie
        animationData={carLoadingAnimation}
        loop
        autoplay
        style={{ height: "50%" }}
      />
    </div>
  );
};

export default CarLoading;
