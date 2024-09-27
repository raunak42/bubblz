"use client";
import { Button } from "../Button/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextSplitter } from "../TextSplitter/TextSplitter";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import { HeroScene } from "@/Scenes/HeroScene";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Hero: React.FC = () => {
  useGSAP(() => {
    const introTl = gsap.timeline();

    introTl
      .set(".hero", { opacity: 1 })
      .from(".hero-heading-word", {
        scale: 3,
        stagger: 1,
        delay: 0.3,
        opacity: 0,
        ease: "power4.in",
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
    <div className="hero opacity-0 flex flex-col overflow-x-clip">
      <View className=" z-90 pointer-events-none sticky top-0 -mt-[100vh] hidden h-screen w-screen md:block">
        <HeroScene />
      </View>
      <div className="hero-primary w-full h-screen flex flex-col items-center space-y-24 lg:space-y-10 mt-6 ">
        <div className="flex flex-col items-center">
          <TextSplitter
            text="Spark Adventure"
            className=" hero-heading-word text-orange-500 text-[4rem] lg:text-[13rem] leading-[.8] uppercase text-center font-[900] "
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="hero-subheading text-sky-950 text-4xl lg:text-6xl font-semibold mt-4">
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
    </div>
  );
};
