import { Carousel } from "@/slices/Carousel/Carousel";
import { Diving } from "@/slices/Diving/Diving";
import { Hero } from "@/slices/Hero/Hero";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-clip" >
      <Hero />
      {/* <Diving/> */}
      <Carousel/>
    </div>
  );
}
 