"use client";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { Suspense } from "react";
import dynamic from "next/dynamic";
// import {Perf} from "r3f-perf";

const Loader = dynamic(
  () => import("@react-three/drei").then((mod) => mod.Loader),
  {
    ssr: false,
  }
);

export const ViewCanvas: React.FC = () => {
  return (
    <>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 90,
          // backgroundColor:"darkcyan"
        }}
        camera={{
          fov: 30,
        }}
        shadows
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
        }}
      >
        <Suspense fallback={null}>  
          <View.Port />
          {/* <SodaCan/> */}
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};
