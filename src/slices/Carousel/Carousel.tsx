"use client";
import FloatingCan from "@/components/SodaCan/FloatingCan";
import { SodaCanProps } from "@/components/SodaCan/SodaCan";
import { WavyCircles } from "@/components/WaveCircles/WavyCircles";
import { Environment, View } from "@react-three/drei";
import { useRef, useState } from "react";
import { Group } from "three";
import { ArrowButton } from "./ArrowButton";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Carousel: React.FC = () => {
  const canRef = useRef<Group>(null);
  const [currentFlavorIndex, setCurrentFlavorIndex] = useState(0);

  const Flavors: {
    flavor: SodaCanProps["flavor"];
    color: string;
    name: string;
  }[] = [
    { flavor: "blackCherry", color: "#710523", name: "Black Cherry" },
    { flavor: "grape", color: "#572981", name: "Grape Goodness" },
    { flavor: "lemonLime", color: "#164405", name: "Lemon Lime" },
    {
      flavor: "strawberryLemonade",
      color: "#690B3D",
      name: "Strawberry Lemonade",
    },
    { flavor: "watermelon", color: "#4B7002", name: "Watermelon Crush" },
  ];

  const changeFlavor = (index: number) => {
    if (!canRef.current) return;
    const nextIndex = (index + Flavors.length) % Flavors.length;

    const tl = gsap.timeline();
    tl.to(
      canRef.current.rotation,
      {
        y:
          index < currentFlavorIndex
            ? `-=${Math.PI * 2 * 6}`
            : `+=${Math.PI * 2 * 6}`,
        ease: "power2.inOut",
        duration: 1,
      },
      0
    )
      .to(
        ".background, .wavy-circles-outer, .wavy-circles-inner",
        {
          backgroundColor: Flavors[nextIndex].color,
          fill: Flavors[nextIndex].color,
          ease: "power2.inOut",
          duration: 1,
        },
        0
      )
      .to(
        {},
        {
          onStart: () => setCurrentFlavorIndex(() => nextIndex),
        },
        0.5
      );
  };

  return (
    <div className=" w-screen h-[100vh] bg-white relative overflow-clip flex justify-center">
      <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-[#710523]" />
      <div className="background pointer-events-none absolute inset-0 bg-[#710523] opacity-50" />

      <div className="flex flex-col items-center justify-start h-full w-full">
        <div className="flex flex-row aspect-square h-[100%] items-center justify-between  relative">
          <div className="text-5xl font-bold text-white z-[120] absolute top-16 w-full text-center">
            Choose Your Flavor
          </div>
          <div className=" text-white z-[120] absolute bottom-16 w-full text-center h-[80px] flex flex-col justify-between ">
            <h1 className="text-4xl font-medium" >{Flavors[currentFlavorIndex].name}</h1>
            <h2 className="text-2xl" >10 Cans - ₹ 349.00</h2>
          </div>
          <ArrowButton
            direction="left"
            onClick={() => changeFlavor(currentFlavorIndex - 1)}
          />
          <View className="h-screen w-[40%]">
            <FloatingCan
              ref={canRef}
              flavor={Flavors[currentFlavorIndex].flavor}
            />
            <Environment
              environmentRotation={[0, 3, 0]}
              environmentIntensity={0.6}
              files="/hdr/lobby.hdr"
            ></Environment>
            <directionalLight intensity={6} position={[0, 1, 1]} />
          </View>
          <ArrowButton
            direction="right"
            onClick={() => changeFlavor(currentFlavorIndex + 1)}
          />
        </div>
      </div>
    </div>
  );
};
