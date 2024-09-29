"use client";
import FloatingCan from "@/components/SodaCan/FloatingCan";
import { SodaCan } from "@/components/SodaCan/SodaCan";
import { AlternatingScence } from "@/scenes/AlternatingScene";
import { useGSAP } from "@gsap/react";
import { View } from "@react-three/drei";
import clsx from "clsx";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { title } from "process";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const AlternatingText: React.FC = () => {
  const bgColors = ["#FFA6B5", "#E9CFF6", "#CBEF9A"];

  const sections = [
    {
      title: "Gut-Friendly Goodness",
      body: "Our soda is packed with prebiotics and 1 billion probiotics, giving your gut the love it deserves. Say goodbye to bloating and hello to a happy, healthy digestive system with every sip.",
    },
    {
      title: "Light Calories, Big Flavor",
      body: "Indulge in bold, refreshing taste without the guilt. At just 20 calories per can, you can enjoy all the flavor you crave with none of the compromise.",
    },
    {
      title: "Naturally Refreshing",
      body: "Made with only the best natural ingredients, our soda is free from artificial sweeteners and flavors. It's a crisp, clean taste that feels as good as it tastes, giving you a boost of real, natural refreshment.",
    },
  ];

  useGSAP(() => {
    const scrollTl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".title-0",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        // markers: true,
      },
    });

    scrollTl1.to(
      ".alternating-text",
      {
        backgroundColor: bgColors[1],
      },
      2
    );

    const scrollTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".title-1",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        // markers: true,
      },
    });

    scrollTl2.to(
      ".alternating-text",
      {
        backgroundColor: bgColors[2],
      },
      2
    );
  });

  return (
    <div className="alternating-text h-[300vh] w-screen bg-yellow-300 text-sky-950 relative">
      <div className="h-full w-full absolute">
        <div className="h-[100vh] sticky top-0">
          <View className="size-full">
            <AlternatingScence />
          </View>
        </div>
      </div>
      {sections.map((item, index) => {
        return (
          <div
            key={index}
            className={`  flex flex-col ${
              index % 2 !== 0 ? "items-end" : "items-start"
            } justify-center  h-[100vh] w-full p-24`}
          >
            <div
              className={`section-${index}  w-[45%] h-full flex flex-col items-start justify-center`}
            >
              <h1 className={` title-${index} text-6xl font-bold w-full `}>
                {item.title}
              </h1>
              <p className={`body-${index} text-xl w-full mt-4`}>{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
