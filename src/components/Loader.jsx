import React from "react";
import { useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <>
      <span className="canvas-load"></span>
      <p className="text-[28px] mt-[40px] font-extrabold font-poppins text-[#915eff]">
        {progress.toFixed(2)}%
      </p>
    </>
  );
};

export default Loader;
