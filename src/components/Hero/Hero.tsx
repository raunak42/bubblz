import { Button } from "../Button/Button";

export const Hero: React.FC = () => {
  return (
    <div className="hero w-full h-screen  flex flex-col items-center space-y-12 mt-6">
      <h1 className="text-orange-500 text-[13rem] uppercase leading-[.8] text-center font-[900] ">
        Spark Adventure
      </h1>
      <div className="flex flex-col items-center">
        <h1 className="text-sky-950 text-6xl font-semibold">Soda Perfected</h1>
        <p className="text-2xl font-normal text-sky-950">
          3-5g sugar. 9g fiber. 5 delicious flavors.{" "}
        </p>
      </div>
      <Button />
    </div>
  );
};
