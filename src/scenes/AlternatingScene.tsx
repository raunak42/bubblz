import FloatingCan from "@/components/SodaCan/FloatingCan";
import { useGSAP } from "@gsap/react";
import { Environment } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Group } from "three";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const AlternatingScence: React.FC = () => {
  const canRef = useRef<Group>(null);

  useGSAP(() => {
    if (!canRef.current) return;

    gsap.set(canRef.current.rotation,{
        y:-0.5,
        z:-0.2
    })

    const scrollTl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-0",
        start: "top top",
        end: "bottom start",
        scrub: 0,
        // markers: true,
      }
    });

    scrollTl1
    .to(canRef.current.position, {
      x: -2,
    })
    .to(canRef.current.rotation,{
        y:0.5,
        z:0.2
    })

    const scrollTl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-1",
        start: "top top",
        end: "bottom start",
        scrub: 0,
        // markers: true,
      },
    });

    scrollTl2.to(canRef.current.position, {
      x: 0,
    }).to(canRef.current.rotation,{
        y:-0.5,
        z:-0.2
        
    })
  });

  return (
    <group position={[1, 0, 0]}>
      <FloatingCan ref={canRef} flavor="strawberryLemonade" />
      <Environment files={"/hdr/lobby.hdr"} environmentIntensity={1.3} />
    </group>
  );
};
