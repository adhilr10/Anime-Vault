// Import necessary libraries and components
import Image from "next/image";
import { variants } from "./AnimeCard";
import { MotionDiv } from "./MotionDiv";

// Define the Props type
type Props = {
  shot: string;
  index: number;
};

// Screenshots component
function Screenshots({ shot, index }: Props) {
  return (
    <div className="flex">
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: index * 0.25,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={{ amount: 0 }}
        className="max-w-sm rounded  w-full"
      >
        <div className="relative w-full h-[37vh]">
          <Image
            src={`https://shikimori.one${shot}`}
            alt="anime"
            fill
            className="rounded-xl"
          />
        </div>
      </MotionDiv>
    </div>
  );
}

export default Screenshots;
