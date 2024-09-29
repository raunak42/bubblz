import { AlternatingText } from "@/slices/AlternatingText/AlternatingText";
import { Carousel } from "@/slices/Carousel/Carousel";
import { Hero } from "@/slices/Hero/Hero";
import { Typography } from "@/slices/Typography/Typography";

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-clip">
      <Hero />
      <Carousel />
      <AlternatingText />
      <Typography />
    </div>
  );
}
