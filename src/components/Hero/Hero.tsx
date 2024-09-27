"use client";
import { Button } from "../Button/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextSplitter } from "../TextSplitter/TextSplitter";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { SodaCan } from "../SodaCan/SodaCan";
import { Environment } from "@react-three/drei";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Hero: React.FC = () => {
  useGSAP(() => {
    const introTl = gsap.timeline();

    introTl
      .from(".hero-heading-word", {
        scale: 3,
        stagger: 1,
        opacity: 0,
        ease: "elastic.inOut",
      })
      .from([".hero-subheading", ".hero-body"], {
        y: 8,
        opacity: 0,
      })
      .from([".hero-button"], {
        y: 8,
        opacity: 0,
      });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        markers: true,
      },
    });

    scrollTl
      .fromTo(
        "body",
        {
          backgroundColor: "#fde047",
        },
        {
          backgroundColor: "#d9f99d",
          overwrite: "auto",
        },
        1.5
      )
      .from(".text-side-heading .split-char", {
        y: 40,
        scale: 1.5,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        rotate: -25,
        ease: "back.out(3)",
      })
      .from(".side-body", {
        y: 20,
        opacity: 0,
      });
  });

  return (
    <div className="hero flex flex-col">
      <div className="hero-primary w-full h-screen flex flex-col items-center space-y-14 mt-12 overflow-x-clip">
        <TextSplitter
          text="Spark Adventure"
          className="hero-heading-word text-orange-500 text-[13rem] uppercase leading-[.55] text-center font-[900] "
        />
        <div className="flex flex-col items-center">
          <h1 className="hero-subheading text-sky-950 text-6xl font-semibold mt-4">
            Soda Perfected
          </h1>
          <p className="hero-body text-2xl font-normal text-sky-950">
            3-5g sugar. 9g fiber. 5 zesty flavors.{" "}
          </p>
        </div>
        <Button />
      </div>

      <div className="hero-secondary w-full h-[100vh] flex flex-col items-start justify-center px-16 ">
        <div className="text-side-heading w-[40%] flex flex-wrap mx-2">
          <TextSplitter
            text="Try all five flavors"
            className=" text-wrap text-6xl font-black uppercase text-sky-950 lg:text-8xl "
          />
          <h1 className="side-body text-xl mt-4 text-sky-950">
            Our soda is made with real fruit juice and a touch of cane sugar. We
            never use artificial sweeteners or high fructose corn syrup. Try all
            five flavours and find your favourite!
          </h1>
        </div>
      </div>
      <Canvas className="h-screen w-full bg-red-200 fixed">
        <SodaCan scale={10} />
        <Environment files="/hdr/lobby.hdr" environmentIntensity={2} />
      </Canvas>
    </div>
  );
};
