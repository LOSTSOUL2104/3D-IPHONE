import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="text-center">
        <div class="flex flex-row gap-2">
          <div class="w-4 h-4 rounded-full bg-red-500 animate-bounce"></div>
          <div class="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
          <div class="w-4 h-4 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
