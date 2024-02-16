import { fetchAnimeDetails } from "../../action";
import Image from "next/image";
import Genre from "@/components/Genre";
import Buttons from "@/components/Buttons";
import Screenshots from "@/components/Screenshots";

interface Props  {
  params: {
    id: string;
  };
  name: string;
  original: string;
  shot: {
    original: string;
  };
};

async function Page({ params: { id } }: Props) {
  const data = await fetchAnimeDetails(id);
  return (
    <>
      <div className="flex pt-20 h-screen justify-center">
        <Image
          className="rounded-lg ml-40 w-full  p-16 hidden lg:block"
          width={350}
          height={260}
          alt="logo"
          src={`https://shikimori.one${data.image.original}`}
        />

        <div className="flex flex-col">
          <h1 className="text-xl font-bold pt-10 mb-2 text-center">
            {data.name}
          </h1>
          <div className="flex gap-4  justify-center mb-3">
            <div className="flex gap-1">
              <Image
                src="/episodes.svg"
                alt="episodes"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="text-base text-white font-bold">Episodes:</p>
              <p className="text-base text-white font-bold">
                {data.episodes || data.episodes_aired}
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <Image
                src="/star.svg"
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="text-base text-white font-bold">Rating:</p>
              <p className="text-base font-bold text-[#FFAD49]">{data.score}</p>
            </div>
          </div>

          <Buttons anime={data} />

          <div className="flex justify-center gap-2 mt-2">
            {data.genres.map(({ name }: Props, index: number) => (
              <Genre name={name} key={index} />
            ))}
          </div>
          <div className="pt-2 pr-20  hidden lg:block">
            <p className="font-bold text-lg">Description:</p>
            <p className="text-gray-500">{data.description}</p>
          </div>
          <div className="lg:hidden mt-10 space-y-4 pb-10">
            <h1 className="font-bold mb-2">Screenshots:</h1>
            {data.screenshots.map((shot: Props, index: number) => (
              <Screenshots shot={shot.original} key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
