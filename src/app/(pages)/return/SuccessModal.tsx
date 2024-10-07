"use client";
import { CircleCheckBig, TriangleAlert } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const SuccessModalContent: React.FC = ({}) => {
  const searchParams = useSearchParams();
  const orderSuccess = searchParams.get("success");

  return (
    <div className="w-full h-screen overflow-clip flex items-center justify-center text-orange-500 bg-[#FEE832]">
      <div className="w-[300px] md:h-[400px] md:w-[600px] shadow-2xl border-[2.5px] border-orange-500 flex flex-col items-center justify-start p-6 gap-8">
        <div className="flex flex-col items-center">
          {orderSuccess === "true" ? (
            <CircleCheckBig size={100} strokeWidth={0.7} color="#FE6334" />
          ) : (
            <TriangleAlert size={100} strokeWidth={0.7} color="#FE6334" />
          )}
          {/* <h2 className="text-lg">Hey {user?.username},</h2> */}
        </div>
        <div className="flex flex-col items-center text-center  w-[70%] gap-2">
          {orderSuccess === "true" ? (
            <h1 className="text-4xl font-bold">Your Order is Confirmed!</h1>
          ) : (
            <h1 className="text-4xl font-bold">Something went wrong!</h1>
          )}
          {orderSuccess === "true" ? (
            <p className="text-sm font-semibold">
              We will send you a shipping confirmation email as soon as your
              order ships.
            </p>
          ) : (
            <p className="text-sm font-semibold">
              We are looking into the error, we will send you a confirmation
              email as soon as possible.
            </p>
          )}
        </div>
        <Link
          href={"/"}
          className=" rounded-full px-8 py-3 text-lg font-semibold border-[2px] border-orange-500"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
};

export const SuccessModal: React.FC = () => {
  return (
    <Suspense>
      <SuccessModalContent />
    </Suspense>
  );
};
