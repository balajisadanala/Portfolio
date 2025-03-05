"use client"
import Lottie from "lottie-react";
import React from "react";
import dynamic from "next/dynamic";


const AnimationLottie = ({ animationPath, width }) => {
  if (typeof window === "undefined") return null; // Prevent SSR issues
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };


  return (
    <Lottie {...defaultOptions} />
  );
};

export default dynamic(() => Promise.resolve(AnimationLottie), { ssr: false });