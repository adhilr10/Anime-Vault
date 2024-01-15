"use client";

type AnimeProp = {
  videos: [
    {
      player_url: string;
    }
  ];
  screenshots: string;
};
export type Prop = {
  anime: AnimeProp;
};

const Video = ({ anime }: Prop) => {
  return (
    <div className="w-full absolute z-10">
      <iframe
        width="100%"
        height="410"
        src={
          anime.videos[0]
            ? `${anime.videos[0].player_url}?autoplay=1`
            : "https://www.youtube.com/embed/tJZtOrm-WPk?si=mcGMa13ndmO2M0Dk"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default Video;
