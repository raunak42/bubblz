"use client";

import { BASE_URL } from "@/app/lib/constants";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";

export const Button: React.FC = () => {
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const router = useRouter();
  const handleClick = async () => {
    setShowSpinner(true);
    const response = await fetch(`${BASE_URL}/api/checkoutSession`, {
      method: "POST",
      cache: "no-store",
    });

    if (response.ok) {
      const redirectUrl = await response.json();
      router.push(redirectUrl);
    } else {
      console.log(await response.json());
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-[200px] h-[60px] hero-button bg-orange-600 hover:bg-orange-700 rounded-xl text-white text-2xl font-bold px-6 py-4 flex items-center justify-center uppercase "
    >
      {showSpinner ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <h1>Order Pack</h1>
      )}
    </button>
  );
};
