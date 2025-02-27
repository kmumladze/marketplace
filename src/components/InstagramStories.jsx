import womanbag from "../assets/womanbag.jpg";
import fashionmodelwoman from "../assets/fashionmodelwoman.jpg";
import fashionmodelman from "../assets/fashionmodelman.jpg";
import makeup from "../assets/makeup.jpg";

export default function InstagramStories() {
  return (
    <div className="flex flex-col items-center gap-10 m-10">
      <h1 className="font-mono font-bold text-2xl dark:text-white">
        Our Instagram Stories
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-10">
        <img className="w-full md:w-60 h-auto" src={womanbag} alt="" />
        <img className="w-full md:w-60 h-auto" src={fashionmodelwoman} alt="" />
        <img className="w-full md:w-60 h-auto" src={fashionmodelman} alt="" />
        <img className="w-full md:w-60 h-auto" src={makeup} alt="" />
      </div>
    </div>
  );
}
