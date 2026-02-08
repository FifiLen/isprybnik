import { ChevronRight } from "lucide-react";
import React from "react";

const TKA = () => {
  return (
    <div className=" max-w-7xl mx-auto px-10 my-20">
      <h2 className=" text-4xl font-semibold tracking-tight">
        Akredytacja PKA WSH-E w Brzegu
      </h2>
      <a
        href="/assets/wazne-dokumenty/PKA.pdf"
        className=" flex items-center text-blue-500 text-xl mt-3 tracking-tight underline underline-offset-3"
        target="_blank"
      >
        <ChevronRight /> Sprawdź
      </a>
    </div>
  );
};

export default TKA;
