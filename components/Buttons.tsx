"use client";
import { cn } from "@/lib/utils";
import { HeartIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import Video, { Prop } from "./Video";

function Buttons({anime}: Prop ) {
  const [active, setActive] = useState(false);
  const [play,setPlay] = useState(false)

  return (
    <>
    <div className="flex justify-center gap-4 mb-2">
      <button onClick={()=> setPlay(!play)} className="flex font-bold text-lg bg-gray-900 p-2 rounded-2xl  hover:border-red-900 hover:border shadow-md gap-1 shadow-red-700">
        <PlayCircle className="text-red-600" />
        Play
      </button>
      <button
        onClick={() => setActive(!active)}
        className="flex font-bold text-lg bg-gray-900 p-2 rounded-2xl  hover:border-red-900 hover:border shadow-md gap-1 shadow-red-700"
      >
        <HeartIcon
          className={cn(
            "text-red-600",
            active && "fill-red-600 animate-bounce"
          )}
        />
        WatchList
      </button>
      
    </div>
    <div className="relative ">
    {play && (
        <Video anime={anime}  />
      )}
      </div>
    </>
  );
}

export default Buttons;
